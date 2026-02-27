import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LogOut, CheckCircle, XCircle, Clock, Download, Search, ChevronsDown, ChevronsUp, RefreshCw } from "lucide-react";
import { StatsCards } from "@/components/admin/StatsCards";
import { RegistrationDetailsRow } from "@/components/admin/RegistrationDetailsRow";
import { RenewalDialog } from "@/components/admin/RenewalDialog";
import { format, isAfter, isBefore, addDays } from "date-fns";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  city: string;
  custom_city: string | null;
  iim_institute: string;
  graduation_year: number;
  profession: string | null;
  company: string | null;
  linkedin: string | null;
  interests: string[];
  membership_type: string;
  transaction_id: string;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  member_id?: string;
  membership_start_date: string | null;
  membership_end_date: string | null;
  last_payment_date: string | null;
  is_active: boolean;
  renewal_count: number;
}

type MembershipFilter = "all" | "active" | "expiring" | "expired";

const Admin = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [expandAll, setExpandAll] = useState(false);
  const [membershipFilter, setMembershipFilter] = useState<MembershipFilter>("all");
  const [renewalDialogOpen, setRenewalDialogOpen] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  useEffect(() => {
    checkAuthAndFetchData();
  }, [navigate]);

  const checkAuthAndFetchData = async () => {
    try {
      // DEVELOPMENT ONLY: Admin role check disabled, but auth required for RLS
      // TODO: Re-enable full admin verification before production
      
      // Check if user is authenticated (needed for RLS policies)
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Admin role check temporarily disabled for development
      /* 
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }
      */

      setIsAdmin(true);
      await fetchRegistrations();
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/auth");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRegistrations = async () => {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load registrations");
      console.error(error);
    } else {
      // Fetch member IDs for each registration
      const registrationsWithMemberIds = await Promise.all(
        (data || []).map(async (reg) => {
          const { data: memberIdData } = await supabase.rpc("get_member_id", {
            registration_id: reg.id,
          });
          return { ...reg, member_id: memberIdData || "N/A" };
        })
      );
      setRegistrations(registrationsWithMemberIds);
      setFilteredRegistrations(registrationsWithMemberIds);
    }
  };

  const toggleExpandAll = () => {
    if (expandAll) {
      setExpandedRows(new Set());
    } else {
      setExpandedRows(new Set(filteredRegistrations.map((reg) => reg.id)));
    }
    setExpandAll(!expandAll);
  };

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const isExpiringSoon = (reg: Registration) => {
    if (reg.status !== "approved" || !reg.membership_end_date) return false;
    const endDate = new Date(reg.membership_end_date);
    const thirtyDaysFromNow = addDays(new Date(), 30);
    return isAfter(endDate, new Date()) && isBefore(endDate, thirtyDaysFromNow);
  };

  const isExpired = (reg: Registration) => {
    if (reg.status !== "approved" || !reg.membership_end_date) return false;
    return isBefore(new Date(reg.membership_end_date), new Date());
  };

  const isActive = (reg: Registration) => {
    if (reg.status !== "approved") return false;
    if (!reg.membership_end_date) return true; // Lifetime membership
    return isAfter(new Date(reg.membership_end_date), new Date());
  };

  useEffect(() => {
    let filtered = registrations;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (reg) =>
          reg.full_name.toLowerCase().includes(query) ||
          reg.email.toLowerCase().includes(query) ||
          reg.phone.includes(query) ||
          reg.iim_institute.toLowerCase().includes(query) ||
          reg.transaction_id.toLowerCase().includes(query)
      );
    }

    // Apply membership status filter
    if (membershipFilter !== "all") {
      filtered = filtered.filter((reg) => {
        switch (membershipFilter) {
          case "active":
            return isActive(reg);
          case "expiring":
            return isExpiringSoon(reg);
          case "expired":
            return isExpired(reg);
          default:
            return true;
        }
      });
    }

    setFilteredRegistrations(filtered);
  }, [searchQuery, registrations, membershipFilter]);

  const exportToCSV = () => {
    const headers = [
      "Member ID",
      "Name",
      "Email",
      "Phone",
      "City",
      "IIM",
      "Graduation Year",
      "Profession",
      "Company",
      "LinkedIn",
      "Interests",
      "Membership Type",
      "Transaction ID",
      "Status",
      "Notes",
      "Registration Date",
    ];

    const rows = filteredRegistrations.map((reg) => [
      reg.id,
      reg.full_name,
      reg.email,
      reg.phone,
      reg.custom_city || reg.city,
      reg.iim_institute,
      reg.graduation_year,
      reg.profession || "",
      reg.company || "",
      reg.linkedin || "",
      reg.interests.join("; "),
      reg.membership_type,
      reg.transaction_id,
      reg.status,
      reg.notes || "",
      new Date(reg.created_at).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `iim-alumni-registrations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Registration data exported successfully");
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingStatusId(id);
    
    // Store previous state for potential rollback
    const previousRegistrations = [...registrations];
    const registration = registrations.find(reg => reg.id === id);
    
    // Optimistically update local state
    setRegistrations(prevRegs =>
      prevRegs.map(reg =>
        reg.id === id ? { ...reg, status: newStatus } : reg
      )
    );

    const { error } = await supabase
      .from("registrations")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      // Rollback on error
      setRegistrations(previousRegistrations);
      toast.error("Failed to update status");
      console.error(error);
    } else {
      toast.success(`Application ${newStatus}`);
      // Refresh to get updated data (including membership dates if approved)
      await fetchRegistrations();

      // Send email notification
      if (registration) {
        try {
          if (newStatus === "approved") {
            // Fetch the updated registration with membership details
            const { data: updatedReg } = await supabase
              .from("registrations")
              .select("*")
              .eq("id", id)
              .single();

            if (updatedReg) {
              const { data: memberIdData } = await supabase.rpc("get_member_id", {
                registration_id: id,
              });

              await supabase.functions.invoke("send-approval-notification", {
                body: {
                  name: updatedReg.full_name,
                  email: updatedReg.email,
                  memberId: memberIdData || "N/A",
                  membershipType: updatedReg.membership_type,
                  membershipStartDate: updatedReg.membership_start_date,
                  membershipEndDate: updatedReg.membership_end_date,
                },
              });
            }
          } else if (newStatus === "rejected") {
            await supabase.functions.invoke("send-rejection-notification", {
              body: {
                name: registration.full_name,
                email: registration.email,
                reason: registration.notes || undefined,
              },
            });
          }
        } catch (emailError) {
          console.error("Failed to send notification email:", emailError);
          // Don't block the admin flow if email fails
        }
      }
    }
    
    setUpdatingStatusId(null);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  const handleRenewalClick = (registration: Registration) => {
    setSelectedRegistration(registration);
    setRenewalDialogOpen(true);
  };

  const getStatusBadge = (reg: Registration) => {
    // For approved members, show their actual membership status
    if (reg.status === "approved") {
      if (isExpired(reg)) {
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="w-3 h-3" />
            Expired
          </Badge>
        );
      }
      if (isExpiringSoon(reg)) {
        return (
          <Badge className="gap-1 bg-orange-500 hover:bg-orange-600 text-white">
            <Clock className="w-3 h-3" />
            Expiring Soon
          </Badge>
        );
      }
      // Active membership
      return (
        <Badge className="gap-1 bg-emerald-500 hover:bg-emerald-600 text-white">
          <CheckCircle className="w-3 h-3" />
          Active
        </Badge>
      );
    }
    
    // For non-approved members, show application status
    switch (reg.status) {
      case "rejected":
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="w-3 h-3" />
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="w-3 h-3" />
            Pending Review
          </Badge>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground">IIM Alumni Canada - Membership Applications</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <StatsCards
          total={registrations.length}
          pending={registrations.filter((r) => r.status === "pending").length}
          approved={registrations.filter((r) => r.status === "approved").length}
          rejected={registrations.filter((r) => r.status === "rejected").length}
        />

        {/* Search, Filter, and Actions */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, phone, IIM, or transaction ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={toggleExpandAll} variant="outline">
              {expandAll ? (
                <>
                  <ChevronsUp className="h-4 w-4 mr-2" />
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronsDown className="h-4 w-4 mr-2" />
                  Expand All
                </>
              )}
            </Button>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
          <Tabs value={membershipFilter} onValueChange={(value) => setMembershipFilter(value as MembershipFilter)}>
            <TabsList>
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Registrations Table */}
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Member ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>City</TableHead>
                <TableHead>IIM</TableHead>
                <TableHead>Grad Year</TableHead>
                <TableHead>Member Since</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegistrations.map((reg) => (
                <RegistrationDetailsRow
                  key={reg.id}
                  registration={reg}
                  isExpanded={expandedRows.has(reg.id)}
                  onToggleExpand={() => toggleRow(reg.id)}
                  memberSince={format(new Date(reg.created_at), "MMMM yyyy")}
                  statusBadge={getStatusBadge(reg)}
                  statusSelect={
                    <Select
                      value={reg.status}
                      onValueChange={(value) => updateStatus(reg.id, value)}
                      disabled={updatingStatusId === reg.id}
                    >
                      <SelectTrigger className="w-32">
                        {updatingStatusId === reg.id ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <SelectValue />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                  onRenew={reg.status === "approved" ? () => handleRenewalClick(reg) : undefined}
                />
              ))}
            </TableBody>
          </Table>
          {filteredRegistrations.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              {searchQuery ? "No registrations match your search" : "No registrations yet"}
            </div>
          )}
        </Card>
      </div>

      {/* Renewal Dialog */}
      <RenewalDialog
        open={renewalDialogOpen && selectedRegistration !== null}
        onOpenChange={setRenewalDialogOpen}
        registrationId={selectedRegistration?.id || ""}
        memberName={selectedRegistration?.full_name || ""}
        membershipType={selectedRegistration?.membership_type || ""}
        onSuccess={fetchRegistrations}
      />
    </div>
    <Footer />
    </>
  );
};

export default Admin;
