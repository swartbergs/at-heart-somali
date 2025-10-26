import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import piaWithCats from "@/assets/pia-with-cats.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Om = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Portrait Image */}
          <div className="mb-6 flex justify-center">
            <img src={piaWithCats} alt={t.about.portraitAlt} className="w-[90vw] md:w-full md:max-w-[820px] max-h-[60vh] object-contain" />
          </div>

          {/* Heading */}
          <h1 className="text-brand-gold text-2xl md:text-3xl mb-6 font-heading">
            {t.about.title}
          </h1>

          {/* Main Content */}
          <div className="space-y-2 text-brand-gold font-body font-light leading-snug text-sm md:text-base">
            <p>{t.about.intro}</p>
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
            <p>{t.about.paragraph4}</p>
            <p>{t.about.paragraph5}</p>
            <p>{t.about.paragraph6}</p>
            <p>{t.about.paragraph7}</p>

            {/* List Section */}
            <div>
              <p className="mb-1">{t.about.subtitle}</p>
              <ul className="list-disc list-inside space-y-0 text-sm leading-[23px]">
                {t.about.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 space-y-2">
              <p>{t.about.paragraph8}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default Om;
