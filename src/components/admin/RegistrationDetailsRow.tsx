import { useState, ReactNode } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight, ExternalLink, Save, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";

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
}

interface RegistrationDetailsRowProps {
  registration: Registration;
  isExpanded: boolean;
  onToggleExpand: () => void;
  memberSince: string;
  statusBadge: ReactNode;
  statusSelect: ReactNode;
  onRenew?: () => void;
}

export const RegistrationDetailsRow = ({
  registration,
  isExpanded,
  onToggleExpand,
  memberSince,
  statusBadge,
  statusSelect,
  onRenew,
}: RegistrationDetailsRowProps) => {
  const [notes, setNotes] = useState(registration.notes || "");
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  const handleSaveNotes = async () => {
    setIsSavingNotes(true);
    const { error } = await supabase
      .from("registrations")
      .update({ notes })
      .eq("id", registration.id);

    if (error) {
      toast.error("Failed to save notes");
      console.error(error);
    } else {
      toast.success("Notes saved successfully");
    }
    setIsSavingNotes(false);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleExpand}
            className="p-0 h-8 w-8"
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </TableCell>
        <TableCell 
          className="font-mono text-xs cursor-pointer hover:text-primary transition-colors" 
          title={registration.id}
          onClick={onToggleExpand}
        >
          {registration.member_id || "N/A"}
        </TableCell>
        <TableCell className="font-medium">{registration.full_name}</TableCell>
        <TableCell>{registration.email}</TableCell>
        <TableCell>{registration.phone}</TableCell>
        <TableCell>{registration.custom_city || registration.city}</TableCell>
        <TableCell>{registration.iim_institute}</TableCell>
        <TableCell>{registration.graduation_year}</TableCell>
        <TableCell>{memberSince}</TableCell>
        <TableCell>{statusBadge}</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            {statusSelect}
            {onRenew && (
              <Button
                size="sm"
                variant="outline"
                onClick={onRenew}
                title="Renew membership"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
          </div>
        </TableCell>
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell colSpan={11} className="bg-muted/30">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Member Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Full Member ID:</span>
                      <p className="font-mono text-xs text-muted-foreground break-all">{registration.id}</p>
                    </div>
                    <div>
                      <span className="font-medium">Registration Date:</span>
                      <p className="text-muted-foreground">
                        {format(new Date(registration.created_at), "PPP 'at' p")}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Last Updated:</span>
                      <p className="text-muted-foreground">
                        {format(new Date(registration.updated_at), "PPP 'at' p")}
                      </p>
                    </div>
                    {registration.linkedin && (
                      <div>
                        <span className="font-medium">LinkedIn:</span>
                        <a
                          href={registration.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline"
                        >
                          View Profile <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {registration.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Admin Notes</h4>
                <div className="space-y-2">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes about this member..."
                    className="min-h-[100px]"
                  />
                  <Button
                    onClick={handleSaveNotes}
                    disabled={isSavingNotes || notes === registration.notes}
                    size="sm"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Notes
                  </Button>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
