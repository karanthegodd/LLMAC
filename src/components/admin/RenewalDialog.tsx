import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";

interface RenewalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  registrationId: string;
  memberName: string;
  membershipType: string;
  onSuccess: () => void;
}

export const RenewalDialog = ({
  open,
  onOpenChange,
  registrationId,
  memberName,
  membershipType,
  onSuccess,
}: RenewalDialogProps) => {
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRenewal = async () => {
    if (!transactionId.trim()) {
      toast.error("Please enter a transaction ID");
      return;
    }

    setIsProcessing(true);

    try {
      // Get current registration data
      const { data: registration, error: fetchError } = await supabase
        .from("registrations")
        .select("*")
        .eq("id", registrationId)
        .single();

      if (fetchError || !registration) {
        throw new Error("Failed to fetch registration data");
      }

      const now = new Date();
      const startDate = now.toISOString();
      let endDate = null;

      // Calculate end date based on membership type
      if (membershipType === "Annual") {
        const end = new Date(now);
        end.setFullYear(end.getFullYear() + 1);
        endDate = end.toISOString();
      }

      // Update registration
      const { error: updateError } = await supabase
        .from("registrations")
        .update({
          last_payment_date: startDate,
          membership_start_date: startDate,
          membership_end_date: endDate,
          renewal_count: (registration.renewal_count || 0) + 1,
          is_active: true,
          transaction_id: transactionId,
        })
        .eq("id", registrationId);

      if (updateError) throw updateError;

      // Create transaction record
      const { error: transactionError } = await supabase
        .from("membership_transactions")
        .insert({
          registration_id: registrationId,
          transaction_id: transactionId,
          payment_date: startDate,
          membership_period_start: startDate.split('T')[0],
          membership_period_end: endDate ? endDate.split('T')[0] : null,
          transaction_type: "renewal",
        });

      if (transactionError) throw transactionError;

      toast.success(`Membership renewed successfully for ${memberName}`);
      setTransactionId("");
      onOpenChange(false);
      onSuccess();
    } catch (error) {
      console.error("Renewal error:", error);
      toast.error("Failed to process renewal");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open && !!registrationId} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Renew Membership</DialogTitle>
          <DialogDescription>
            Process membership renewal for <strong>{memberName || "member"}</strong>
            <br />
            Membership Type: <strong>{membershipType || "N/A"}</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="transaction">Transaction ID</Label>
            <Input
              id="transaction"
              placeholder="Enter Interac transfer confirmation number"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            {membershipType === "Annual" ? (
              <p>This will extend the membership for 1 year from today.</p>
            ) : (
              <p>Lifetime memberships do not expire.</p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button onClick={handleRenewal} disabled={isProcessing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isProcessing ? "animate-spin" : ""}`} />
            Process Renewal
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
