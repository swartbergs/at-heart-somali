import certifications from "@/assets/certifications.png";
import instagramIcon from "@/assets/instagram-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full bg-white py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Instagram and Certifications */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/atheart_somalicats_cattery/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Instagram - At Heart Somali Cats"
          >
            <img 
              src={instagramIcon} 
              alt="Instagram"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>
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
