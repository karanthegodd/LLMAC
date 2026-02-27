import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const SponsorsCarousel = () => {
  const navigate = useNavigate();

  const { data: sponsors } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .eq("is_active", true)
        .order("display_order");

      if (error) throw error;
      return data;
    },
  });

  if (!sponsors || sponsors.length === 0) return null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-3">
            Our Proud Sponsors
          </h2>
          <p className="text-muted-foreground italic">
            Together we unite, grow, and make an impact.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem
                key={sponsor.id}
                className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-4">
                  <a
                    href={sponsor.website_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.sponsor_name}
                        className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate("/partners")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View All Sponsors
          </Button>
        </div>
      </div>
    </section>
  );
};
