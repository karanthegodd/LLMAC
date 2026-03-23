import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FALLBACK_SPONSORS = [
  { id: "fb-1", sponsor_name: "RBC", logo_url: "https://www.google.com/s2/favicons?domain=rbc.com&sz=128", website_url: "https://www.rbc.com" },
  { id: "fb-2", sponsor_name: "Scotiabank", logo_url: "https://www.google.com/s2/favicons?domain=scotiabank.com&sz=128", website_url: "https://www.scotiabank.com" },
  { id: "fb-3", sponsor_name: "Bell", logo_url: "https://www.google.com/s2/favicons?domain=bell.ca&sz=128", website_url: "https://www.bell.ca" },
  { id: "fb-4", sponsor_name: "Starbucks", logo_url: "https://www.google.com/s2/favicons?domain=starbucks.ca&sz=128", website_url: "https://www.starbucks.ca" },
  { id: "fb-5", sponsor_name: "Avis", logo_url: "https://www.google.com/s2/favicons?domain=avis.com&sz=128", website_url: "https://www.avis.com" },
] as const;

export const SponsorsCarousel = () => {
  const navigate = useNavigate();
  const [paused, setPaused] = useState(false);

  const { data: sponsors, isLoading, isError } = useQuery({
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
  const hasSponsors = Boolean(sponsors && sponsors.length > 0);

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

        {hasSponsors ? (
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
              {sponsors!.map((sponsor) => (
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
                          loading="lazy"
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
        ) : (
          <div
            className="w-full max-w-6xl mx-auto overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex w-max"
              style={{
                animation: "marquee 22s linear infinite",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {[...FALLBACK_SPONSORS, ...FALLBACK_SPONSORS].map((sponsor, idx) => (
                <div key={`${sponsor.id}-${idx}`} className="w-[220px] p-4 shrink-0">
                  <a
                    href={sponsor.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32">
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.sponsor_name}
                        loading="lazy"
                        className="h-14 w-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {!hasSponsors && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            {isLoading ? "Loading sponsors..." : isError ? "Showing sample logos for now." : "Showing sample logos for now."}
          </p>
        )}

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
