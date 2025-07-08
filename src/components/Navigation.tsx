import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "News", href: "/news" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
                      <img src="/src/assets/images/kelle.jpg" alt="logo"  className="h-[60px] w-[6-px]" />

            {/* <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div> */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">KELLENA</h1>
              <p className="text-xs text-muted-foreground leading-none">
                Empathy & Empowerment Network
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-gradient-warm text-accent-foreground hover:opacity-90 transition-opacity">
              Donate Now
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
            >
              <span className={cn("w-5 h-0.5 bg-foreground transition-all", isMenuOpen && "rotate-45 translate-y-1.5")} />
              <span className={cn("w-5 h-0.5 bg-foreground transition-all", isMenuOpen && "opacity-0")} />
              <span className={cn("w-5 h-0.5 bg-foreground transition-all", isMenuOpen && "-rotate-45 -translate-y-1.5")} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;