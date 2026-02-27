import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface MembershipSectionProps {
  form: UseFormReturn<any>;
}

export const MembershipSection = ({ form }: MembershipSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Membership Details</h2>
        <p className="text-sm text-muted-foreground">Choose your membership type and complete payment</p>
      </div>

      <Alert className="bg-primary/5 border-primary/20">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <p className="font-semibold mb-2 text-foreground">🎓 Choose your Membership Type</p>
          <p className="mb-3 text-foreground/90">
            IIM Alumni Canada offers two membership options designed to fit your level of engagement:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>
              <strong>Annual Membership (CAD $30):</strong> Access to exclusive events, member directory, 
              and networking opportunities for one year.
            </li>
            <li>
              <strong>Lifetime Membership (CAD $250):</strong> One-time payment valid for up to 10 years, 
              includes premium access, recognition on the IIMAC site, and early invitations to flagship events.
            </li>
          </ul>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="membershipType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Membership Type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select membership type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Annual">Annual (CAD $30)</SelectItem>
                  <SelectItem value="Lifetime">Lifetime (CAD $250)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Alert className="bg-accent/10 border-accent/30">
          <AlertDescription className="text-sm text-foreground">
            <p className="font-semibold mb-2">💳 Payment Instructions</p>
            <p>
              Please transfer your membership fee via Interac to{" "}
              <strong className="text-accent">treasurer@iimacanada.org</strong>.{" "}
              Use your full name as the payment reference.
            </p>
          </AlertDescription>
        </Alert>

        <FormField
          control={form.control}
          name="transactionId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Confirmation (Transaction ID) *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Interac transaction ID or payment reference"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
};
