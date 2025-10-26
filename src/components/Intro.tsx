import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const Intro = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full bg-brand-dark-green py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Brand promise */}
        <p className="text-brand-gold text-base md:text-lg leading-relaxed mb-12 font-light">
          {t.intro.promise}
        </p>

        {/* Decorative welcome */}
        <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-brand-gold mt-12 font-normal">
          {t.intro.welcome}
        </h2>
      </div>
    </section>
  );
};
