import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import planerHero from "@/assets/planer-hero-new.jpg";
import planerCat1 from "@/assets/planer-cat-1.png";
import planerCat2 from "@/assets/planer-cat-2.png";
import planerCat3 from "@/assets/planer-cat-3.png";
import planerCat4 from "@/assets/planer-cat-4.png";
import planerCat5 from "@/assets/planer-cat-5.png";
import planerCat6 from "@/assets/planer-cat-6.png";

const Planer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Image Section */}
        <div className="w-full flex justify-center bg-brand-dark-green">
          <img
            src={planerHero}
            alt="Somalikatter"
            className="w-full max-w-7xl object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="bg-brand-dark-green">
          <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            {/* Heading */}
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-6 font-heading uppercase tracking-wide">
              Planerade Parningar
            </h1>

            {/* Intro Text */}
            <div className="text-brand-gold font-body font-light leading-snug text-sm md:text-base mb-12 space-y-2">
              <p>Här publiceras planerade parningar för 2025.</p>
              <p>
                Skicka gärna en intresseanmälan här via hemsidan eller till{" "}
                <a href="mailto:pi@tupplurens.se" className="underline hover:text-brand-gold/80">
                  pi@tupplurens.se
                </a>
              </p>
              <p>
                Besök av kattungar tidigast efter att kattungarna fyllt 5 veckor. Besök bokas via överenskommelse . Vid bokning av kattunge tas en tingningsavgift ut. Jag använder mig av SVERAKs
                rekommenderade Tingningsavtal och även Köpekontrakt.
              </p>
            </div>

            {/* Cat Pair Section */}
            <div className="space-y-12">
              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat1}
                    alt="Katt 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat2}
                    alt="Katt 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Cat Info */}
              <div className="text-brand-gold font-body font-light space-y-1 text-sm md:text-base">
                <h2 className="text-xl md:text-2xl font-heading mb-4">
                  JC KCH SE*At Heart Jes + JCH KCH SE*Wingardiums Caspian
                </h2>
                <p>Förväntade färger: Viltfärg</p>
                <p>Beräknad födelse: 17 oktober</p>
                <p>Hälsotester: Båda Normal PK def och. Normal PRA</p>
              </div>

              {/* Interest Button */}
              <div className="flex justify-start mb-16">
                <Button
                  variant="outline"
                  className="bg-transparent text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-dark-green font-body px-8 py-3"
                >
                  Anmäl intresse
                </Button>
              </div>
            </div>

            {/* Second Cat Pair */}
            <div className="space-y-12">
              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat3}
                    alt="CH SE*At Heart Hei"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat4}
                    alt="SC SE*At Heart FUX DVM"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Cat Info */}
              <div className="text-brand-gold font-body font-light space-y-1 text-sm md:text-base">
                <h2 className="text-xl md:text-2xl font-heading mb-4">
                  CH SE*At Heart Hei + SC SE*At Heart FUX DVM
                </h2>
                <p>Förväntade färger: Viltfärg och Blå</p>
                <p>Beräknad födelse: 17 oktober</p>
                <p>Hälsotester: Båda Normal PK def och Normal PRA</p>
              </div>

              {/* Interest Button */}
              <div className="flex justify-start mb-16">
                <Button
                  variant="outline"
                  className="bg-transparent text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-dark-green font-body px-8 py-3"
                >
                  Anmäl intresse
                </Button>
              </div>
            </div>

            {/* Third Cat Pair */}
            <div className="space-y-12">
              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat5}
                    alt="GIC SE*At Heart Cat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-brand-green-muted">
                  <img
                    src={planerCat6}
                    alt="JCH KCH SE*Wingardiums Caspian"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Cat Info */}
              <div className="text-brand-gold font-body font-light space-y-1 text-sm md:text-base">
                <h2 className="text-xl md:text-2xl font-heading mb-4">
                  GIC SE*At Heart Cat + JCH KCH SE*Wingardiums Caspian
                </h2>
                <p>Förväntade färger: Viltfärg och sorrel</p>
                <p>Beräknad födelse: 20 oktober</p>
                <p>Hälsotester: Båda Normal PK def, Cat bärare av PRA / Fux Normal PRA</p>
              </div>

              {/* Interest Button */}
              <div className="flex justify-start mb-16">
                <Button
                  variant="outline"
                  className="bg-transparent text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-dark-green font-body px-8 py-3"
                >
                  Anmäl intresse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planer;
