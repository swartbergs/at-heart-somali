import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Kattungar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const litters: { id: string; name: string; birthDate: string; mother: string; father: string; image: string; kittens: { name: string; status: string }[] }[] = [];

  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-6 font-heading uppercase tracking-wide">
            {t.kittens.title}
          </h1>

          {/* Intro Text */}
          <div className="text-brand-gold font-body font-light leading-snug text-sm md:text-base mb-12 space-y-4">
            <p>{t.kittens.intro}</p>
            <p>
              {language === 'sv' 
                ? 'Besök av kattungar tidigast efter att kattungarna fyllt 8 veckor. Besök bokas via överenskommelse. Vid bokning av kattunge tas en tingningsavgift ut. Jag använder mig av SVERAKs rekommenderade tingningsavtal och även SVERAKs köpekontrakt.'
                : 'Visits to kittens at the earliest after the kittens have turned 8 weeks old. Visits are booked by agreement. A deposit fee is charged when booking a kitten. I use SVERAK\'s recommended Deposit Agreement and also SVERAK\'s Purchase Agreement.'}
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
