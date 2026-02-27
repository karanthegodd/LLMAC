import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface ProfessionalSectionProps {
  form: UseFormReturn<any>;
}

export const ProfessionalSection = ({ form }: ProfessionalSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Professional Details</h2>
        <p className="text-sm text-muted-foreground">Tell us about your professional background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Tech Corp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>LinkedIn Profile</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
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
