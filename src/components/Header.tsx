import { Link } from "react-router-dom";
import { useState } from "react";
import atHeartLogo from "@/assets/at-heart-logo.png";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Om", href: "/om" },
  { name: "Planer", href: "/planer" },
  { name: "Kattungar", href: "/kattungar" },
  { name: "Kullar", href: "/kullar" },
  { name: "Avelshonor", href: "/avelshonor" },
  { name: "Avelshanar", href: "/avelshanar" },
  { name: "Shows", href: "/shows" },
  { name: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-dark-green border-b border-brand-green-muted/30">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Huvudnavigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            aria-label="At Heart Somali Cats - Startsida"
          >
            <img 
              src={atHeartLogo}
              alt="At Heart logo"
              className="w-8 h-8 group-hover:scale-110 transition-transform" 
              aria-hidden="true"
            />
            <span className="font-heading text-xl text-brand-gold font-semibold tracking-wider">
              At Heart Somali Cats
            </span>
          </Link>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigation.map((item, index) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="relative px-4 py-2 text-sm font-body text-brand-gold hover:text-brand-gold/80 transition-colors font-light"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.name}
                  {hoveredIndex === index && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button - placeholder for future */}
          <button 
            className="lg:hidden p-2 text-brand-gold"
            aria-label="Öppna meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
