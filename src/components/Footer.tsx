import { Link } from "react-router-dom";

import { Facebook } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About KELLENA",
      links: [
        { label: "Our Mission", href: "/about" },
        { label: "Our Team", href: "/about" },
        { label: "Our History", href: "/about" },
        { label: "Annual Reports", href: "/impact" }
      ]
    },
    {
      title: "Programs",
      links: [
        { label: "Livelihood Empowerment", href: "/programs/livelihood" },
        { label: "Empathy Circles", href: "/programs/empathy" },
        { label: "Youth Empowerment", href: "/programs/youth" },
        { label: "Community Development", href: "/programs/community" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { label: "Volunteer", href: "/get-involved" },
        { label: "Donate", href: "/donate" },
        { label: "Partner With Us", href: "/get-involved" },
        { label: "Events", href: "/get-involved" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "News & Blog", href: "/news" },
        { label: "Impact Stories", href: "/impact" },
        { label: "Media Kit", href: "/resources/media" },
        { label: "Privacy Policy", href: "/privacy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/share/19Ght3mkPb" },
    // { name: "Instagram", icon: "📷", href: "#" },
    // { name: "X (Twitter)", icon: "🐦", href: "#" },
   // { name: "WhatsApp", icon: "💬", href: "#" },
   // { name: "YouTube", icon: "📺", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KELLENA</h3>
                  <p className="text-sm text-secondary-foreground/80">
                    Empathy & Empowerment Network
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Email:</strong> kellen.association21@gmail.com
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong> +237 6 82 90 21 11
                </p>
                <p className="text-sm">
                  <strong>Address:</strong> Nkambe, North West Region Cameroon
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media and Newsletter */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Quick Donate */}
            
            <Link to="/donate" className="bg-gradient-warm rounded-md py-2 px-4 text-accent-foreground hover:opacity-90 transition-opacity">
                           Quick Donate
                        </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/70">
            <p>
              © 2025 KELLENA - Keeping Empathy and Livelihood Empowerment Network Association. 
              All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/transparency" className="hover:text-accent transition-colors">
                Transparency Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;