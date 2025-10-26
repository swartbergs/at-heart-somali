import certifications from "@/assets/certifications.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full bg-white py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className="flex justify-center mb-8">
          <img 
            src={certifications} 
            alt={t.footer.certificationsAlt}
            className="h-20 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Copyright and membership */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-muted-foreground font-light">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
