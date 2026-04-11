import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  services: "Services",
  about: "About",
  resources: "Resources",
  faq: "FAQ",
  contact: "Contact",
  "privacy-policy": "Privacy Policy",
  terms: "Terms of Service",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container-custom py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = routeLabels[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");

          return (
            <li key={name} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {isLast ? (
                <span className="font-medium text-foreground">{label}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
