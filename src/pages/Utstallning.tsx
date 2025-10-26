import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import ribbonsHero from "@/assets/ribbons-hero.jpg";
import showAward from "@/assets/show-award.png";
import showHofors1 from "@/assets/show-hofors-1.png";
import showHofors2 from "@/assets/show-hofors-2.png";
import showHofors3 from "@/assets/show-hofors-3.png";
import showHofors4 from "@/assets/show-hofors-4.png";
import showHofors5 from "@/assets/show-hofors-5.png";
import showGestrika from "@/assets/show-gestrika.png";
import showStockholm1 from "@/assets/show-stockholm-1.png";
import showNykoping from "@/assets/show-nykoping.png";

const Utstallning = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const shows = [
    {
      date: language === 'sv' ? "17 augusti 2025" : "August 17, 2025",
      location: language === 'sv' ? "Bromma, SVERIGE" : "Bromma, SWEDEN",
      mainImage: showAward,
      gridImages: [],
      club: language === 'sv' ? "Östkattens kattklubb" : "Östkattens Cat Club",
      subtitle: "",
      results: [
        "SC SE* At Heart Fux DVM " + (language === 'sv' ? "fick HP och blev BIV" : "received HP and became BIV"),
        "JCH KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CAC" : "received CAC")
      ]
    },
    {
      date: language === 'sv' ? "31 maj 2025" : "May 31, 2025",
      location: language === 'sv' ? "Kumla, SVERIGE" : "Kumla, SWEDEN",
      mainImage: showHofors1,
      gridImages: [showHofors2, showHofors3, showHofors4, showHofors5],
      club: language === 'sv' ? "Vi Kattägare kattklubb" : "Vi Kattägare Cat Club",
      subtitle: "Aby och Somali Breed BIS",
      results: [
        "SC SE* At Heart Fux DVM " + (language === 'sv' ? "fick HP (Price of Honor)" : "received HP (Price of Honor)"),
        "GIC SE* At Heart Cat " + (language === 'sv' ? "fick CACS" : "received CACS"),
        "KCH JCH SE* At Heart Jes " + (language === 'sv' ? "fick CACJ, NOM och BIS" : "received CACJ, NOM and BIS"),
        "KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CACJ, Junior Champoin, BIV, NOM och BIS" : "received CACJ, Junior Champion, BIV, NOM and BIS")
      ],
      dayLabel: language === 'sv' ? "LÖRDAG" : "SATURDAY"
    },
    {
      date: language === 'sv' ? "10 maj 2025" : "May 10, 2025",
      location: language === 'sv' ? "Hofors, SVERIGE" : "Hofors, SWEDEN",
      mainImage: showGestrika,
      gridImages: [],
      club: language === 'sv' ? "Gestrika kattklubb" : "Gestrika Cat Club",
      subtitle: "",
      results: [
        "GIC SE* At Heart Cat " + (language === 'sv' ? "fick CACS och NOM" : "received CACS and NOM"),
        "KCH JCH SE* At Heart Jes " + (language === 'sv' ? "fick CACJ" : "received CACJ"),
        "KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CACJ och NOM" : "received CACJ and NOM")
      ]
    },
    {
      date: language === 'sv' ? "12 april 2025" : "April 12, 2025",
      location: language === 'sv' ? "Stockholm, SVERIGE" : "Stockholm, SWEDEN",
      mainImage: showStockholm1,
      gridImages: [],
      club: language === 'sv' ? "Stockholms kattklubb" : "Stockholm Cat Club",
      subtitle: "",
      results: [
        "GIC SE* At Heart Cat " + (language === 'sv' ? "fick CACS x 2, NOM i utställning B" : "received CACS x 2, NOM in show B"),
        "KCH JCH SE* At Heart Jes " + (language === 'sv' ? "fick CACJ x 2" : "received CACJ x 2"),
        "KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CACJ x 2 och NOM i utställning A" : "received CACJ x 2 and NOM in show A")
      ],
      dayLabel: language === 'sv' ? "LÖRDAG UTSTÄLLNING A + B" : "SATURDAY SHOW A + B"
    },
    {
      date: language === 'sv' ? "22, 23 mars 2025" : "March 22, 23, 2025",
      location: language === 'sv' ? "Nyköping, SVERIGE" : "Nyköping, SWEDEN",
      mainImage: showNykoping,
      gridImages: [],
      club: language === 'sv' ? "Östkattens kattklubb" : "Östkattens Cat Club",
      subtitle: "",
      results: [
        "KCH JCH SE* At Heart Jes " + (language === 'sv' ? "fick CACJ" : "received CACJ"),
        "KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CAC och NOM" : "received CAC and NOM")
      ],
      sundayResults: [
        "KCH JCH SE* At Heart Jes " + (language === 'sv' ? "fick CACS och därmed Junior Champoin och BIV" : "received CACS and thus Junior Champion and BIV"),
        "KCH SE* Wingardiums Caspian " + (language === 'sv' ? "fick CACC, NOM och BIS" : "received CACC, NOM and BIS")
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="w-full h-[500px] md:h-[600px] relative">
          <img
            src={ribbonsHero}
            alt={t.shows.heroAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <h1 className="text-brand-gold text-4xl md:text-5xl mb-6 font-heading uppercase tracking-wide text-center">
            {t.shows.title}
          </h1>
          <Separator className="bg-brand-gold w-full max-w-md mx-auto mb-12" />
          <div className="space-y-12">
            {shows.map((show, index) => (
              <div key={index} className="space-y-6">
                <div className="text-brand-gold font-body text-center">
                  <h2 className="text-xl md:text-2xl font-heading mb-1">
                    {show.date}
                  </h2>
                  <p className="text-lg font-light">
                    {show.location}
                  </p>
                </div>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    src={show.mainImage}
                    alt={`${show.club} ${language === 'sv' ? 'utställning' : 'show'}`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                {show.gridImages.length > 0 && (
                  <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
                    {show.gridImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${show.club} ${language === 'sv' ? 'utställning bild' : 'show image'} ${idx + 2}`}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    ))}
                  </div>
                )}
                <div className="text-brand-gold font-body text-sm md:text-base text-center">
                  <h3 className="text-lg md:text-xl font-heading mb-1">
                    {show.club}
                  </h3>
                  {show.subtitle && (
                    <p className="text-base font-light mb-3">{show.subtitle}</p>
                  )}
                  <p className="font-bold mb-2">{show.dayLabel || (language === 'sv' ? "LÖRDAG" : "SATURDAY")}:</p>
                  <div className="space-y-1 mb-4 font-light">
                    {show.results.map((result, idx) => (
                      <p key={idx}>{result}</p>
                    ))}
                  </div>
                  {show.sundayResults && (
                    <>
                      <p className="font-bold mb-2">{language === 'sv' ? "SÖNDAG" : "SUNDAY"}:</p>
                      <div className="space-y-1 mb-4 font-light">
                        {show.sundayResults.map((result, idx) => (
                          <p key={idx}>{result}</p>
                        ))}
                      </div>
                    </>
                  )}
                  <p className="font-light">{language === 'sv' ? 'Fler bilder' : 'More pictures'}</p>
                </div>
                {index < shows.length - 1 && (
                  <Separator className="bg-brand-gold/30 my-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Utstallning;
