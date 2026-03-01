import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo-iimac.png";
import { SponsorsCarousel } from "@/components/sponsors/SponsorsCarousel";

export const Footer = () => {
  const location = useLocation();
  const isPartnersPage = location.pathname === "/partners";
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isPartnersPage && !isHomePage && <SponsorsCarousel />}
      <footer className="border-t bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            {/* Logo & Tagline */}
            <div className="space-y-4">
              <Link to="/" className="inline-block focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded">
                <img
                  src={logo}
                  alt="IIMAC - Indian Institute of Management Alumni Canada"
                  className="h-14 md:h-16 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-primary-foreground leading-relaxed max-w-xs">
                Indian Institute of Management Alumni Canada. Connecting IIM alumni across Canada.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-primary-foreground text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link to="/about#leadership" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-bold text-primary-foreground text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Member Portal
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Blog / News
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Join IIMAC
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-primary-foreground hover:text-white transition-colors focus-visible:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-bold text-primary-foreground text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/iimacanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-white transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-white transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-white transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-white transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <a
                href="mailto:email@iimac.org"
                className="text-sm text-primary-foreground hover:text-white transition-colors flex items-center gap-2 focus-visible:underline"
              >
                <Mail className="h-4 w-4" />
                email@iimac.org
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-white/20 text-center text-sm text-primary-foreground">
            <p>© 2026 IIMAC – Indian Institute of Management Alumni Canada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
