import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-iimac.png";

const leftLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/events", label: "Events" },
  { path: "/membership", label: "Membership" },
];

const rightLinks = [
  { path: "/partners", label: "Partners" },
  { path: "/distinguished-alumni", label: "Alumni" },
  { path: "/contact", label: "Contact Us" },
];

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  const linkClass = "text-foreground/90 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md";
  const activePillClass = "bg-primary text-primary-foreground hover:text-primary-foreground px-4 py-2 rounded-full font-medium";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Left links (desktop) */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-end pr-4">
            {leftLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass}
              >
                {link.path === "/" && isActive("/") ? (
                  <span className={activePillClass}>Home</span>
                ) : (
                  <span className="px-3 py-2 rounded-md hover:bg-muted/50">
                    {link.label}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 rounded focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={logo}
              alt="IIMAC - Indian Institute of Management Alumni Canada"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Right links + Login (desktop) */}
          <div className="hidden md:flex items-center gap-1 flex-1 pl-4 justify-start">
            {rightLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClass} px-3 py-2 rounded-md hover:bg-muted/50 ${isActive(link.path) ? "text-primary font-medium" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/auth" className="ml-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white border-border text-foreground hover:bg-muted/50 rounded-full px-4"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile: logo left, menu + login right */}
          <div className="flex md:hidden items-center gap-2 flex-1 justify-end">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="bg-white border-border text-foreground rounded-full px-3 text-sm">
                Login
              </Button>
            </Link>
            <button
              type="button"
              className="p-2 rounded-md hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-1">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md ${isActive(link.path) ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
