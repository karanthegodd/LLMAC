import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Calendar, MapPin, Clock, Users, Instagram, Linkedin, X, ChevronLeft, ChevronRight, Play, Pause, Shuffle } from "lucide-react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedPastEventYear, setSelectedPastEventYear] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string; year: string; index: number } | null>(null);
  const [galleryLightbox, setGalleryLightbox] = useState<{ images: string[]; currentIndex: number } | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  
  const EVENTS_PER_PAGE = 6;
  const upcomingEvents = [
    {
      title: "IIMAC 2025 Year End Party",
      date: "December 2025",
      time: "TBA",
      location: "TBA",
      category: "Social",
      tag: "Unite" as const,
      attendees: 150,
      description: "Join us for our annual year-end celebration! Details will be announced soon.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
    },
  ];

  const timeCapsulePhotos = [
    { year: "2023", title: "Toronto Picnic 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/20230820_135346-1024x768.jpg" },
    { year: "2023", title: "Toronto Holi 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/04/img_4987_52758333591_o-1-1024x683.jpg" },
    { year: "2023", title: "Toronto Picnic 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/20230820_135041-1024x768.jpg" },
    { year: "2022", title: "Toronto 2022", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/IMG_9915.jpg" },
    { year: "2023", title: "Toronto Picnic 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/20230820_125341-1024x768.jpg" },
    { year: "2021", title: "2021", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/IMG_9795.jpg" },
    { year: "2020", title: "2020", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2022/01/PHOTO-2020-10-20-21-57-56_1-1024x768.jpg" },
    { year: "2019", title: "2019", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/2019-Networking-Event-b-1024x768.jpeg" },
    { year: "2018", title: "2018", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/2018-Holi-Event-1024x768.jpeg" },
    { year: "2017", title: "2017", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/2017-Picnic-c-1024x768.jpeg" },
    { year: "2016", title: "2016", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/2016-picnic-1024x768.jpg" },
    { year: "2012", title: "2012", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/2012-Get-together.jpg" },
  ];

  const pastEvents = [
    {
      year: "2025",
      title: "AI Event - Unlock the Power of AI with IIMAC",
      date: "October 1, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Head Office, ICICI Bank Canada, 10th floor, 366 Bay street, Toronto, ON, M5H 4B2",
      category: "Professional Development",
      tag: "Grow" as const,
      attendees: 100,
      description: "Get ready for an exciting journey into the world of Artificial Intelligence! Join us for an exclusive AI Event filled with innovation, inspiration, and insights.",
      fullDescription: "Our AI Event brought together industry leaders, innovators, and alumni to explore the transformative power of Artificial Intelligence. The event featured keynote presentations, interactive workshops, and networking opportunities focused on AI applications across various industries.",
      poster: "https://www.iimalumnicanada.ca/wp-content/uploads/2025/09/AI-poster-new-768x1023.jpeg",
      instagram: "https://www.instagram.com/reel/DO95CePjcAt/?igsh=dmJzZWxxYWtwYWZm",
      linkedin: "https://www.linkedin.com/posts/iimac_unlock-the-power-of-ai-with-iimac-activity-7374639827020886017-vKqf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABYIHF4BYSiyE2mpa6dopJyGdgP7T-J3_5s",
      gallery: [
        "https://www.iimalumnicanada.ca/wp-content/uploads/2025/09/AI-poster-new-768x1023.jpeg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2023/04/photo1669818220-150x150.jpeg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2023/04/photo1659362032-150x150.jpeg",
      ],
    },
    {
      year: "2024",
      title: "Diwali Celebration 2024",
      date: "November 12, 2024",
      time: "6:00 PM - 10:00 PM MST",
      location: "Calgary, AB",
      category: "Social",
      tag: "Impact" as const,
      attendees: 180,
      description: "A vibrant celebration of lights, bringing together the IIMAC community to celebrate Diwali with traditional festivities, cultural performances, and delicious cuisine.",
      fullDescription: "Our annual Diwali celebration was a spectacular evening filled with traditional dance performances, festive decorations, and authentic Indian cuisine. Alumni and their families came together to celebrate the festival of lights with rangoli competitions, traditional music, and a delightful dinner. The event fostered community spirit and cultural connection among members.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [],
    },
    {
      year: "2024",
      title: "Leadership Summit",
      date: "September 28, 2024",
      time: "2:00 PM - 6:00 PM EST",
      location: "Virtual Event",
      category: "Professional Development",
      tag: "Grow" as const,
      attendees: 120,
      description: "An inspiring virtual summit featuring industry leaders sharing insights on leadership, innovation, and career advancement in today's dynamic business landscape.",
      fullDescription: "The Leadership Summit brought together C-suite executives, entrepreneurs, and thought leaders for a half-day virtual conference. Sessions covered topics including transformational leadership, navigating organizational change, and building high-performing teams. Attendees participated in interactive Q&A sessions and networking breakout rooms, gaining valuable insights and connections.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [],
    },
    {
      year: "2024",
      title: "Summer BBQ & Networking",
      date: "July 15, 2024",
      time: "11:00 AM - 4:00 PM EST",
      location: "Ottawa, ON",
      category: "Networking",
      tag: "Unite" as const,
      attendees: 90,
      description: "A relaxed outdoor gathering perfect for networking, building connections, and enjoying great food with fellow alumni in a casual summer setting.",
      fullDescription: "Our summer BBQ event provided the perfect backdrop for informal networking and relationship building. Alumni enjoyed grilled favorites, lawn games, and casual conversations in a beautiful outdoor setting. The event welcomed both long-time members and recent alumni, creating opportunities for mentorship connections and friendship.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [],
    },
    {
      year: "2023",
      title: "Toronto Holi Festival 2023",
      date: "March 18, 2023",
      time: "2:00 PM - 7:00 PM EST",
      location: "Toronto, ON",
      category: "Social",
      tag: "Unite" as const,
      attendees: 200,
      description: "A colorful celebration of spring with traditional Holi festivities, music, and community bonding.",
      fullDescription: "Our Holi celebration brought vibrant colors and joy to the community. Participants enjoyed traditional color throwing, Indian street food, and cultural performances.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [
        "https://www.iimalumnicanada.ca/wp-content/uploads/2023/04/img_4987_52758333591_o-1-1024x683.jpg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2023/04/photo1678536806-1-150x150.jpeg",
      ],
    },
    {
      year: "2021",
      title: "Year End Celebration 2021",
      date: "December 15, 2021",
      time: "6:00 PM - 10:00 PM EST",
      location: "Toronto, ON",
      category: "Social",
      tag: "Unite" as const,
      attendees: 150,
      description: "Annual year-end party celebrating achievements and fellowship.",
      fullDescription: "Our year-end celebration brought members together for an evening of networking, entertainment, and reflection on the year's accomplishments.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/Yr-end-event-2021-150x150.jpg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/IMG_9795.jpg",
      ],
    },
    {
      year: "2021",
      title: "Guest Speaker Series - Industry Leaders",
      date: "Various dates 2021",
      time: "Virtual",
      location: "Online",
      category: "Professional Development",
      tag: "Grow" as const,
      attendees: 300,
      description: "A series of inspiring talks from industry leaders including Ajay Bisaria, Sandi Sethi, and Solar Suresh.",
      fullDescription: "Our guest speaker series featured prominent leaders sharing their experiences and insights on business, leadership, and innovation. The virtual format allowed participation from across Canada.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/Ajay-Bisaria-150x150.jpg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/Sandi-Sethi-150x150.jpg",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/Solar-Suresh-150x150.png",
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/Economical-Insurance-150x150.jpg",
      ],
    },
    {
      year: "2021",
      title: "Summer Picnic 2021",
      date: "August 21, 2021",
      time: "11:00 AM - 5:00 PM EST",
      location: "Toronto, ON",
      category: "Social",
      tag: "Unite" as const,
      attendees: 175,
      description: "Family-friendly outdoor picnic with games, food, and networking.",
      fullDescription: "Our summer picnic provided a relaxed atmosphere for families to connect. Activities included cricket, volleyball, and traditional games.",
      poster: undefined as string | undefined,
      instagram: undefined as string | undefined,
      linkedin: undefined as string | undefined,
      gallery: [
        "https://www.iimalumnicanada.ca/wp-content/uploads/2022/03/2021-Picnic-150x150.jpg",
      ],
    },
  ];

  // Extract unique years and sort them
  const uniqueYears = Array.from(new Set(timeCapsulePhotos.map(photo => photo.year))).sort();
  
  // Filter photos based on selected year
  const filteredPhotos = selectedYear === "all" 
    ? timeCapsulePhotos 
    : timeCapsulePhotos.filter(photo => photo.year === selectedYear);

  // Extract unique years from pastEvents, sort descending
  const pastEventYears = Array.from(
    new Set(pastEvents.map(event => event.year))
  ).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter past events by selected year
  const filteredPastEvents = selectedPastEventYear === "all"
    ? pastEvents
    : pastEvents.filter(event => event.year === selectedPastEventYear);

  // Pagination
  const totalPages = Math.ceil(filteredPastEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;
  const paginatedEvents = filteredPastEvents.slice(startIndex, endIndex);
  
  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPastEventYear]);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || !carouselApi) return;
    
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoplay, carouselApi]);

  // Update current slide index
  useEffect(() => {
    if (!carouselApi) return;
    
    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleRandomMemory = () => {
    const randomIndex = Math.floor(Math.random() * filteredPhotos.length);
    carouselApi?.scrollTo(randomIndex);
  };

  const openLightbox = (photo: typeof timeCapsulePhotos[0], index: number) => {
    setLightboxImage({ ...photo, index });
  };

  const openGalleryLightbox = (images: string[], index: number) => {
    setGalleryLightbox({ images, currentIndex: index });
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;
    
    const currentIndex = lightboxImage.index;
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setLightboxImage({ ...filteredPhotos[newIndex], index: newIndex });
  };

  const navigateGalleryLightbox = (direction: "prev" | "next") => {
    if (!galleryLightbox) return;
    
    const currentIndex = galleryLightbox.currentIndex;
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % galleryLightbox.images.length
      : (currentIndex - 1 + galleryLightbox.images.length) % galleryLightbox.images.length;
    
    setGalleryLightbox({ ...galleryLightbox, currentIndex: newIndex });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Networking":
        return "bg-primary/10 text-primary border-primary/20";
      case "Professional Development":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Social":
        return "bg-accent/30 text-accent-foreground border-accent/40";
      case "Entrepreneurship":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Unite":
        return "bg-primary/10 text-primary border-primary/30";
      case "Grow":
        return "bg-secondary/10 text-secondary-foreground border-secondary/30";
      case "Impact":
        return "bg-accent/10 text-accent-foreground border-accent/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                IIMAC <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
              </h1>
              <p className="text-xl font-semibold">
                <span className="hover-glow-blue inline-block transition-all cursor-default">Where We Unite.</span>{' '}
                <span className="hover-glow-gold inline-block transition-all cursor-default">Where We Grow.</span>{' '}
                <span className="hover-glow-maroon inline-block transition-all cursor-default">Where We Impact.</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Connect, learn, and grow through our diverse range of networking events, 
                workshops, and social gatherings across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss out on these exciting opportunities to connect with fellow alumni
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 hover:shadow-elegant transition-all">
                  {event.poster && (
                    <div className="overflow-hidden rounded-t-lg">
                      <img 
                        src={event.poster} 
                        alt={event.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className={getTagColor(event.tag)} variant="outline">
                          {event.tag}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}+ attending</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    {(event.instagram || event.linkedin) && (
                      <div className="flex gap-2 pt-2">
                        {event.instagram && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild
                            className="flex items-center gap-2"
                          >
                            <a href={event.instagram} target="_blank" rel="noopener noreferrer">
                              <Instagram className="h-4 w-4" />
                              Instagram
                            </a>
                          </Button>
                        )}
                        {event.linkedin && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild
                            className="flex items-center gap-2"
                          >
                            <a href={event.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                              LinkedIn
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      RSVP Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Past Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Highlights from our recent community gatherings
              </p>
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
              <Button
                variant={selectedPastEventYear === "all" ? "default" : "outline"}
                onClick={() => setSelectedPastEventYear("all")}
                className="rounded-full transition-all"
              >
                All Years
              </Button>
              {pastEventYears.map((year) => (
                <Button
                  key={year}
                  variant={selectedPastEventYear === year ? "default" : "outline"}
                  onClick={() => setSelectedPastEventYear(year)}
                  className="rounded-full transition-all"
                >
                  {year}
                </Button>
              ))}
            </div>

            {/* Event Cards Grid (2 rows × 3 columns) */}
            <div className="grid grid-cols-3 gap-6">
              {paginatedEvents.map((event, index) => (
                <Card 
                  key={`event-${index}`}
                  className="border-2 cursor-pointer hover:shadow-elegant transition-all group"
                  onClick={() => setSelectedEvent(event)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className={getTagColor(event.tag)} variant="outline">
                          {event.tag}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} attended</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>

        {/* Time Capsule */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Time Capsule
              </h2>
              <p className="text-lg text-muted-foreground">
                A journey through our memorable events over the years
              </p>
            </div>

            {/* Interactive Timeline Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
              <Button
                variant={selectedYear === "all" ? "default" : "outline"}
                onClick={() => setSelectedYear("all")}
                className="rounded-full transition-all"
              >
                All Years
              </Button>
              {uniqueYears.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => setSelectedYear(year)}
                  className="rounded-full transition-all"
                >
                  {year}
                </Button>
              ))}
            </div>

            {/* Carousel */}
            <div className="relative max-w-6xl mx-auto">
              <Carousel 
                className="w-full" 
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card 
                        className="overflow-hidden border-2 hover:shadow-elegant transition-all group cursor-pointer animate-scale-in"
                        onClick={() => openLightbox(photo, index)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.image} 
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white space-y-1 animate-fade-in">
                              <p className="font-bold text-xl">{photo.year}</p>
                              <p className="text-sm">{photo.title}</p>
                              <p className="text-xs opacity-75">Click to view full size</p>
                            </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              {photo.year}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>

              {/* Carousel Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} / {filteredPhotos.length}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAutoplay(!autoplay)}
                    className="gap-2"
                  >
                    {autoplay ? (
                      <>
                        <Pause className="h-4 w-4" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Autoplay
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRandomMemory}
                    className="gap-2"
                  >
                    <Shuffle className="h-4 w-4" />
                    Random Memory
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={() => setLightboxImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={() => navigateLightbox("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={() => navigateLightbox("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              {lightboxImage && (
                <div className="relative animate-fade-in">
                  <img
                    src={lightboxImage.image}
                    alt={lightboxImage.title}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-primary">
                          {lightboxImage.year}
                        </Badge>
                        <span className="text-sm opacity-75">
                          {lightboxImage.index + 1} / {filteredPhotos.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{lightboxImage.title}</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Gallery Lightbox Modal */}
        <Dialog open={!!galleryLightbox} onOpenChange={() => setGalleryLightbox(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={() => setGalleryLightbox(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {galleryLightbox && galleryLightbox.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={() => navigateGalleryLightbox("prev")}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={() => navigateGalleryLightbox("next")}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              {galleryLightbox && (
                <div className="relative animate-fade-in">
                  <img
                    src={galleryLightbox.images[galleryLightbox.currentIndex]}
                    alt={`Gallery image ${galleryLightbox.currentIndex + 1}`}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white space-y-2">
                      <span className="text-sm opacity-75">
                        {galleryLightbox.currentIndex + 1} / {galleryLightbox.images.length}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Want to Stay Updated on Events?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join IIMAC to receive exclusive invitations and early access to all our events
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedEvent?.title}</DialogTitle>
            {selectedEvent?.category && (
              <Badge className={getCategoryColor(selectedEvent.category)}>
                {selectedEvent.category}
              </Badge>
            )}
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-6">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{selectedEvent?.date}</span>
                </div>
                {selectedEvent?.time && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{selectedEvent.time}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{selectedEvent?.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{selectedEvent?.attendees} attended</span>
                </div>
              </div>

              {selectedEvent?.description && (
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">About the Event</h3>
                  <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
                </div>
              )}

              {selectedEvent?.fullDescription && (
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Event Highlights</h3>
                  <p className="text-sm text-muted-foreground">{selectedEvent.fullDescription}</p>
                </div>
              )}

              {(selectedEvent?.instagram || selectedEvent?.linkedin) && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Social Media</h3>
                  <div className="flex gap-2">
                    {selectedEvent.instagram && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="flex items-center gap-2"
                      >
                        <a href={selectedEvent.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4" />
                          Instagram
                        </a>
                      </Button>
                    )}
                    {selectedEvent.linkedin && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="flex items-center gap-2"
                      >
                        <a href={selectedEvent.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Poster & Gallery */}
            <div className="space-y-4">
              {selectedEvent?.poster && (
                <div className="flex items-start justify-center md:justify-end">
                  <img 
                    src={selectedEvent.poster} 
                    alt={selectedEvent.title}
                    className="w-full max-w-[350px] h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}

              {selectedEvent?.gallery && selectedEvent.gallery.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Photo Gallery</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedEvent.gallery.map((image: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border-2 border-border hover:border-primary transition-all"
                        onClick={() => openGalleryLightbox(selectedEvent.gallery, index)}
                      >
                        <img
                          src={image}
                          alt={`${selectedEvent.title} - Photo ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-xs font-medium">View Full Size</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
