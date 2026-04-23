import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  FacebookIcon,
  LinkedinIcon,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarColor: string;
  image: string | null;
  facebook: string | null;
  linkedin: string | null;
  website: string | null;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    role: "SME Owner",
    company: "Sharma Traders Pvt. Ltd.",
    quote:
      "TaxCare Nepal made our VAT filings simple and always on time. Their team is professional and really understands Nepal's tax requirements.",
    rating: 5,
    avatarColor: "bg-blue-500",
    image: null,
    facebook: "https://www.facebook.com",
    linkedin: null,
    website: null,
  },
  {
    name: "Abhishek Adhikari",
    role: "Himalaya Krishi Founder",
    company: "Himalaya Krishi",
    quote:
      "Professional, responsive, and very clear with guidance. They helped us register our company and set up proper bookkeeping from day one.",
    rating: 5,
    avatarColor: "bg-emerald-500",
    image: "/avatars/as.png",
    facebook: "https://www.facebook.com/whoisabhishekadhikari",
    linkedin: "https://www.linkedin.com/in/whoisabhishekadhikari/",
    website: "https://krishihimalaya.com/",
  },
  {
    name: "Sujal Manandhar",
    role: "Manager",
    company: "Dakshina Oil Factory",
    quote:
      "I used to stress about tax deadlines every month. Now with TaxCare Nepal handling everything, I can focus on my business with peace of mind.",
    rating: 4.5,
    avatarColor: "bg-orange-500",
    image: "/avatars/sj.png",
    facebook: "https://www.facebook.com/sujal.mdhr79",
    linkedin: "https://www.linkedin.com/in/sujal-manandhar07/",
    website: "https://www.sujalmdhr.com.np",
  },
  {
    name: "Priya Thapa",
    role: "Freelance Consultant",
    company: "Independent",
    quote:
      "As a freelancer, understanding personal tax was overwhelming. TaxCare Nepal broke it all down for me and helped me file correctly for the first time.",
    rating: 4,
    avatarColor: "bg-violet-500",
    image: null,
    facebook: "https://www.facebook.com",
    linkedin: "https://linkedin.com",
    website: null,
  },
];

const renderStars = (rating: number) =>
  Array.from({ length: 5 }).map((_, i) => {
    const filled = i < Math.floor(rating);
    const half = !filled && i < rating;
    return (
      <span key={i} className="relative inline-flex h-4 w-4">
        <Star className="h-4 w-4 text-yellow-300/30" />
        {(filled || half) && (
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: half ? "50%" : "100%" }}
          >
            <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
          </span>
        )}
      </span>
    );
  });

const getInitials = (name: string) => {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0]?.[0]?.toUpperCase() ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";
  return first + last;
};

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isPaused = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => {
      if (!isPaused.current) emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding gradient-hero text-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`animate-on-scroll mx-auto mb-12 max-w-2xl text-center ${isVisible ? "visible" : ""}`}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            Client Stories
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70">
            Trusted by businesses across Nepal for reliable tax and accounting
            services
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`animate-on-scroll ${isVisible ? "visible" : ""} overflow-hidden`}
          ref={emblaRef}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  {/* Quote icon */}
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/20">
                    <Quote className="h-5 w-5 text-yellow-300" />
                  </div>

                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p className="mb-6 flex-1 text-white/85 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="mb-4 border-t border-white/10" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-white/30"
                      />
                    ) : (
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${testimonial.avatarColor} text-sm font-bold text-white ring-2 ring-white/30`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="truncate text-xs text-white/55">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      {(testimonial.facebook ||
                        testimonial.linkedin ||
                        testimonial.website) && (
                        <div className="mt-2 flex gap-1">
                          {testimonial.facebook && (
                            <a
                              href={testimonial.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${testimonial.name} on Facebook`}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-white/20 hover:text-white"
                            >
                              <FacebookIcon className="h-3 w-3" />
                            </a>
                          )}
                          {testimonial.linkedin && (
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${testimonial.name} on LinkedIn`}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-white/20 hover:text-white"
                            >
                              <LinkedinIcon className="h-3 w-3" />
                            </a>
                          )}
                          {testimonial.website && (
                            <a
                              href={testimonial.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${testimonial.name}'s website`}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-white/20 hover:text-white"
                            >
                              <Globe className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-6 bg-yellow-300" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
