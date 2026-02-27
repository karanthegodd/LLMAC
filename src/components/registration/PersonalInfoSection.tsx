import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const cities = [
  // Popular cities
  "Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa",
  // Other major cities (alphabetically)
  "Abbotsford", "Barrie", "Burlington", "Cambridge", "Charlottetown",
  "Edmonton", "Fredericton", "Guelph", "Halifax", "Hamilton",
  "Iqaluit", "Kelowna", "Kingston", "Kitchener", "Laval",
  "London", "Markham", "Mississauga", "Moncton", "Oshawa",
  "Quebec City", "Regina", "Richmond", "Saskatoon", "St. Catharines",
  "St. John's", "Surrey", "Thunder Bay", "Victoria", "Waterloo",
  "Whitehorse", "Windsor", "Winnipeg", "Yellowknife",
  // Others option
  "Others"
];

const iimInstitutes = [
  "IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow", "IIM Indore",
  "IIM Kozhikode", "IIM Shillong", "IIM Rohtak", "IIM Ranchi", "IIM Trichy",
  "IIM Udaipur", "IIM Amritsar", "IIM Nagpur", "IIM Kashipur", "IIM Bodh Gaya",
  "IIM Visakhapatnam", "IIM Sambalpur", "IIM Jammu", "IIM Sirmaur"
];

interface PersonalInfoSectionProps {
  form: UseFormReturn<any>;
}

export const PersonalInfoSection = ({ form }: PersonalInfoSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Personal Information</h2>
        <p className="text-sm text-muted-foreground">Your Member ID will be auto-generated after approval</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City / Chapter *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("city") === "Others" && (
          <FormField
            control={form.control}
            name="customCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your City *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="iimInstitute"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IIM Institute *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your IIM" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {iimInstitutes.map((institute) => (
                    <SelectItem key={institute} value={institute}>
                      {institute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="graduationYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Graduation Year *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1980}
                  max={2030}
                  placeholder="e.g., 2020"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
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
