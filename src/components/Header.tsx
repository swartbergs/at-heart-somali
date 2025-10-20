import { Link } from "react-router-dom";
import { useState } from "react";
import atHeartLogo from "@/assets/at-heart-logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Om", href: "/om" },
  { name: "Planer", href: "/planer" },
  { name: "Kattungar", href: "/kattungar" },
  { name: "Kullar", href: "/kullar" },
  { name: "Avelshonor", href: "/avelshonor" },
  { name: "Avelshanar", href: "/avelshanar" },
  { name: "Utställning", href: "/utstallning" },
  { name: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden p-2 text-brand-gold hover:text-brand-gold/80 transition-colors"
                aria-label="Öppna meny"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-dark-green border-brand-green-muted/30 w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-brand-gold hover:text-brand-gold/80 transition-colors font-body text-lg py-2 px-4 rounded-md hover:bg-brand-green-muted/20"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
