import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";

const interestOptions = [
  "Networking",
  "Jobs & Referrals",
  "Volunteering",
  "Mentorship",
  "Sponsorship & Partnership",
];

interface InterestsSectionProps {
  form: UseFormReturn<any>;
}

export const InterestsSection = ({ form }: InterestsSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Interests</h2>
        <p className="text-sm text-muted-foreground">Select what you're interested in</p>
      </div>

      <FormField
        control={form.control}
        name="interests"
        render={() => (
          <FormItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interestOptions.map((interest) => (
                <FormField
                  key={interest}
                  control={form.control}
                  name="interests"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={interest}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(interest)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, interest])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== interest
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {interest}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
};
