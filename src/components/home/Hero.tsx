import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      {/* SVG Financial Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-green-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
      </div>

      <div className="container-custom relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-white/90">Trusted by 500+ businesses in Nepal</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Smart Tax Solutions for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-300">Individuals & Businesses</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-yellow-400/20 blur-sm" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
            We simplify tax, accounting, and compliance so you can focus on growth.
            Expert guidance tailored to Nepal's regulatory requirements.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-yellow-400 font-semibold text-gray-900 shadow-lg hover:bg-yellow-300"
            >
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-sm text-white/75">
              <Shield className="h-5 w-5 text-green-400" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/75">
              <Clock className="h-5 w-5 text-green-400" />
              <span>On-time Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/75">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Expert Professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white/90"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
