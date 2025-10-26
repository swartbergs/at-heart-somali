import { Link } from "react-router-dom";
import { useState } from "react";
import atHeartLogo from "@/assets/at-heart-logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navigation = [
    { name: t.navigation.home, href: "/" },
    { name: t.navigation.about, href: "/om" },
    { name: t.navigation.plans, href: "/planer" },
    { name: t.navigation.kittens, href: "/kattungar" },
    { name: t.navigation.litters, href: "/kullar" },
    { name: t.navigation.queens, href: "/avelshonor" },
    { name: t.navigation.studs, href: "/avelshanar" },
    { name: t.navigation.shows, href: "/utstallning" },
    { name: t.navigation.contact, href: "/kontakt" },
  ];

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

          {/* Language Switcher - Desktop */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm font-body text-brand-gold hover:text-brand-gold/80 transition-colors border border-brand-gold/30 rounded-md hover:border-brand-gold/50"
            aria-label={language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
          >
            <span className="text-base">{language === 'sv' ? '🇸🇪' : '🇬🇧'}</span>
            <span className="font-medium">{language === 'sv' ? 'SV' : 'EN'}</span>
          </button>

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

          {/* Mobile menu and language switcher */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Switcher - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-body text-brand-gold hover:text-brand-gold/80 transition-colors border border-brand-gold/30 rounded-md hover:border-brand-gold/50"
              aria-label={language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
            >
              <span className="text-sm">{language === 'sv' ? '🇸🇪' : '🇬🇧'}</span>
              <span className="font-medium">{language === 'sv' ? 'SV' : 'EN'}</span>
            </button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="p-2 text-brand-gold hover:text-brand-gold/80 transition-colors"
                  aria-label="Öppna meny"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-transparent border-none w-[160px] shadow-none">
                <nav className="flex flex-col gap-2 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-brand-gold hover:text-brand-gold/80 transition-colors font-body text-sm py-1.5 px-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
