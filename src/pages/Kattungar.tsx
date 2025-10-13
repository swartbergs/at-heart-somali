import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import kittensHero from "@/assets/kittens-hero.png";

const Kattungar = () => {
  const kittens = [
    { name: "Hane - Viltfärgad - SOM n", status: "Bokad", statusColor: "bg-[#D4A574]", textColor: "text-[#8CC4EC]" },
    { name: "Hona - Sorrel - SOM o", status: "Stannar i katteriet", statusColor: "bg-[#8B9A7E]", textColor: "text-brand-gold" },
    { name: "Hona - Viltfärgad - SOM n", status: "Tingad", statusColor: "bg-[#C4956F]", textColor: "text-[#F0A8C8]" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-6 font-heading uppercase tracking-wide">
            Aktuella Kattungar
          </h1>

          {/* Intro Text */}
          <div className="text-brand-gold font-body font-light leading-snug text-sm md:text-base mb-12 space-y-2">
            <p>
              Skicka gärna en intresseanmälan här via hemsidan eller till{" "}
              <a href="mailto:pi@tupplurens.se" className="underline hover:text-brand-gold/80">
                pi@tupplurens.se
              </a>
              .
            </p>
            <p>
              Besök av kattungar tidigast efter att kattungarna fyllt 5 veckor. Besök bokas via överenskommelse. Vid bokning av kattunge tas en tingningsavgift ut. Jag använder mig av SVERAKs
              rekommenderade Tingningsavtal och även SVERAKs Köpekontrakt.
            </p>
          </div>

          {/* Litter Section */}
          <div className="space-y-8">
            {/* Litter Image */}
            <div className="w-full max-w-2xl mx-auto">
              <img
                src={kittensHero}
                alt="Kattunge kull"
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Litter Info */}
            <div className="text-brand-gold font-body space-y-2 text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-heading mb-4">N-Kull 2025-10-21</h2>
              <p className="font-light"><span className="font-bold">Född: 2025-10-00</span></p>
              <p className="font-light">Mor: GIC SE*At Heart Cat, SOM n</p>
              <p className="font-light">Far: JCH KCH SE*Wingardiums Caspian, SOM o</p>
            </div>

            {/* Kittens List */}
            <div className="space-y-4 mt-8">
              {kittens.map((kitten, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-brand-gold/20"
                >
                  <span className={`${kitten.textColor} font-body font-light text-sm md:text-base`}>
                    {kitten.name}
                  </span>
                  <Badge
                    className={`${kitten.statusColor} text-brand-dark-green font-body text-xs md:text-sm px-4 py-1 hover:opacity-90`}
                  >
                    {kitten.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kattungar;
