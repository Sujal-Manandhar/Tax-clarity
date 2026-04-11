import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WHATSAPP_NUMBER = "9779823405140";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to get expert tax help from Tax Clarity Nepal.");

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden section-padding bg-primary"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-10 left-1/4 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

      <div className="container-custom relative">
        <div
          className={`animate-on-scroll mx-auto max-w-3xl text-center ${isVisible ? "visible" : ""}`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            Free Initial Consultation
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Get Expert Tax Help Today
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Talk to a tax professional and get a clear plan for your compliance.
            Zero obligation — just clarity.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-yellow-400 font-semibold text-gray-900 shadow-lg hover:bg-yellow-300"
            >
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 bg-white/10 text-white border border-white/30 hover:bg-white/20"
            >
              <a href="tel:+9779823405140">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 bg-green-500 text-white hover:bg-green-400"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
