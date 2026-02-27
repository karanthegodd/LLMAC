import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-iimac.png";

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/membership", label: "Membership" },
    { path: "/events", label: "Alumni" },
    { path: "/partners", label: "Sponsors" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="IIMAC - Indian Institute of Management Alumni Canada. Unite. Grow. Impact." 
              className="h-20 md:h-24 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(246,162,30,0.6)]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={isActive(link.path) ? "bg-primary" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4">
              <button type="button" className="p-2 rounded-md hover:bg-muted" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </button>
              <Link to="/auth">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/#cta">
                <Button className="bg-primary hover:bg-primary/90">Join Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(link.path) ? "bg-primary" : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Login</Button>
            </Link>
            <button type="button" className="p-2 w-full justify-start flex" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </button>
            <Link to="/#cta" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-start bg-primary hover:bg-primary/90">Join Now</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
