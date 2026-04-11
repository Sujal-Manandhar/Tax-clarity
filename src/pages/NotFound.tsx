import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowRight, FileText, Users, BookOpen, HelpCircle } from "lucide-react";

const popularPages = [
  { label: "Our Services", href: "/services", icon: FileText },
  { label: "About Us", href: "/about", icon: Users },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            {/* 404 display */}
            <div className="relative mb-8 inline-block">
              <div className="text-[10rem] font-black leading-none text-primary/10 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full gradient-hero shadow-xl">
                    <span className="text-2xl font-bold text-white">TC</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Page Not Found
            </h1>
            <p className="mb-2 text-lg text-muted-foreground">
              The page at <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">{location.pathname}</code> doesn't exist.
            </p>
            <p className="mb-8 text-muted-foreground">
              It may have been moved, renamed, or you may have typed the address incorrectly.
            </p>

            {/* Primary actions */}
            <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/contact">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Popular pages */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                You might be looking for one of these:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group flex items-center gap-3 rounded-xl border border-border p-3 text-left transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <page.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {page.label}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
