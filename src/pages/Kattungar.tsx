import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import lKullImage from "@/assets/jes-med-l-kull.jpg";
import mKullImage from "@/assets/cat-med-m-kull.jpg";
import nKullImage from "@/assets/hei-med-n-kull.jpg";

const Kattungar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const litters = [
    {
      id: "n-kull",
      name: "N-Kull 2025-10-23",
      birthDate: "2025-10-23",
      mother: "CH SE*At Heart Hei, SOM n",
      father: "SC SE*At Heart Fux DVM, SOM n",
      image: nKullImage,
      kittens: [
        { name: language === 'sv' ? "Hane SOM a" : "Male SOM a", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hona SOM a" : "Female SOM a", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hane SOM n" : "Male SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hona SOM n" : "Female SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hona SOM o" : "Female SOM o", status: t.kittens.status.available },
      ]
    },
    {
      id: "m-kull",
      name: "M-Kull 2025-10-21",
      birthDate: "2025-10-21",
      mother: "GIC SE*At Heart Cat, SOM n",
      father: "JCH KCH SE*Wingardiums Caspian SOM p",
      image: mKullImage,
      kittens: [
        { name: language === 'sv' ? "Hane SOM n" : "Male SOM n", status: t.kittens.status.available },
      ]
    },
    {
      id: "l-kull",
      name: "L-Kull 2025-10-17",
      birthDate: "2025-10-17",
      mother: "JCH, KCH SE*At Heart Jes, SOM n",
      father: "JCH, KCH SE*Wingardiums Caspian, SOM p",
      image: lKullImage,
      kittens: [
        { name: language === 'sv' ? "Hona SOM n" : "Female SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hona SOM n" : "Female SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hane SOM n" : "Male SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hane SOM n" : "Male SOM n", status: t.kittens.status.available },
        { name: language === 'sv' ? "Hane SOM n" : "Male SOM n", status: t.kittens.status.available },
      ]
    }
  ];

  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-6 font-heading uppercase tracking-wide">
            {t.kittens.title}
          </h1>

          {/* Intro Text */}
          <div className="text-brand-gold font-body font-light leading-snug text-sm md:text-base mb-12 space-y-2">
            <p>
              {language === 'sv' ? 'Skicka gärna en intresseanmälan här via hemsidan eller till' : 'Feel free to send a registration of interest here via the website or to'}{" "}
              <a href="mailto:pi@tupplurens.se" className="underline hover:text-brand-gold/80">
                pi@tupplurens.se
              </a>
              .
            </p>
            <p>
              {language === 'sv' 
                ? 'Besök av kattungar tidigast efter att kattungarna fyllt 5 veckor. Besök bokas via överenskommelse. Vid bokning av kattunge tas en tingningsavgift ut. Jag använder mig av SVERAKs rekommenderade Tingningsavtal och även SVERAKs Köpekontrakt.'
                : 'Visits to kittens at the earliest after the kittens have turned 5 weeks old. Visits are booked by agreement. A deposit fee is charged when booking a kitten. I use SVERAK\'s recommended Deposit Agreement and also SVERAK\'s Purchase Agreement.'}
            </p>
          </div>

          {/* Litters Section */}
          <div className="space-y-16">
            {litters.map((litter) => (
              <div key={litter.id} className="space-y-8">
                {/* Litter Image */}
                <div className="w-full max-w-4xl mx-auto flex justify-start">
                  <img 
                    src={litter.image} 
                    alt={`${litter.name} ${language === 'sv' ? 'kattunge kull' : 'kitten litter'}`}
                    className="h-[600px] w-auto object-contain rounded-lg" 
                  />
                </div>

                {/* Litter Info */}
                <div className="text-brand-gold font-body space-y-2 text-sm md:text-base">
                  <h2 className="text-2xl md:text-3xl font-heading mb-4">{litter.name}</h2>
                  <p className="font-light"><span className="font-bold">{t.kittens.born}: {litter.birthDate}</span></p>
                  <p className="font-light">{t.kittens.mother}: {litter.mother}</p>
                  <p className="font-light">{t.kittens.father}: {litter.father}</p>
                </div>

                {/* Kittens List */}
                <div className="space-y-4 mt-8">
                  {litter.kittens.map((kitten, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-brand-gold/20">
                      <span className="text-brand-gold font-body font-light text-sm md:text-base">
                        {kitten.name}
                      </span>
                      <Badge className="bg-brand-gold text-brand-dark-green font-body text-xs md:text-sm px-4 py-1 hover:opacity-90">
                        {kitten.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default Kattungar;
