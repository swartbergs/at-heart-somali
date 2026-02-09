import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import planerHero from "@/assets/planer-hero-new.jpg";
import planerCat1 from "@/assets/planer-cat-1.png";
import planerCat2 from "@/assets/planer-cat-2.png";
import planerCat3 from "@/assets/planer-cat-3.png";
import planerCat4 from "@/assets/planer-cat-4.png";
import planerCat5 from "@/assets/planer-cat-5.png";
import planerCat6 from "@/assets/planer-cat-6.png";
const Planer = () => {
  const navigate = useNavigate();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Image Section */}
        <div className="w-full flex justify-center bg-brand-dark-green">
          <img src={planerHero} alt={t.plans.heroAlt} className="w-full max-w-7xl object-contain" />
        </div>

        {/* Content Section */}
        <div className="bg-brand-dark-green">
          <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            {/* Heading */}
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-6 font-heading uppercase tracking-wide">{t.plans.title}</h1>

            {/* Intro Text */}
            <div className="text-brand-gold font-body font-light leading-snug text-sm md:text-base mb-12 space-y-2">
              <p>{t.plans.visitInfo}</p>
              <p>
                {t.plans.contactInfo}{" "}
                <a href="mailto:pi@tupplurens.se" className="underline hover:text-brand-gold/80">
                  pi@tupplurens.se
                </a>
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Planer;