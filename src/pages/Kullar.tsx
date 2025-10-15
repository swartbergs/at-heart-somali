import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import kullarHero from "@/assets/kullar-hero.png";
import litterI from "@/assets/litter-i.png";
import litterH from "@/assets/litter-h.png";
import litterF from "@/assets/litter-f.png";
import litterE from "@/assets/litter-e.png";
import litterD from "@/assets/litter-d.png";
import litterC from "@/assets/litter-c.png";
import litterB from "@/assets/litter-b.png";
import litterA from "@/assets/litter-a.png";

const Kullar = () => {
  const litters = [
    {
      id: "J",
      name: "Kull J",
      birthDate: "2024-06-14",
      mother: "GIC SE* At Heart Cat",
      father: "SE* At Heart Ess",
      image: kullarHero,
      kittens: [
        { name: "SE* At Heart Jes Hona" },
        { name: "SE* At Heart Joy Hona" },
      ]
    },
    {
      id: "I",
      name: "Kull I",
      birthDate: "2023-04-09",
      mother: "E* At Heart Bez",
      father: "Imo Impala av Rubicon",
      image: litterI,
      kittens: [
        { name: "SE* At Heart Ian SOM n Hane" },
        { name: "SE* At Heart Ice SOM n Hane" },
        { name: "SE* At Heart Izo SOM n Hane" },
      ]
    },
    {
      id: "H",
      name: "Kull H",
      birthDate: "2023-03-31",
      mother: "GIC SE* At Heart Cat",
      father: "S* Ianthelagens Montgomery Scott",
      image: litterH,
      kittens: [
        { name: "SE* At Heart Hei SOM n Hona" },
        { name: "SE* At Heart Hie SOM n Hona" },
        { name: "SE* At Heart Hux SOM n Hane" },
      ]
    },
    {
      id: "F",
      name: "Kull F",
      birthDate: "2022-06-07",
      mother: "SE* At Heart Bez",
      father: "CH FI* Kisompa's Oliviero",
      image: litterF,
      kittens: [
        { name: "SE* At Heart Fay SOM n Hane" },
        { name: "SE* At Heart Fix SOM n Hona" },
        { name: "SE* At Heart Fux SOM n Hane" },
      ]
    },
    {
      id: "E",
      name: "Kull E",
      birthDate: "2021-02-22",
      mother: "SE* At Heart Bez",
      father: "CH Neelix des Minocs d'Armor",
      image: litterE,
      kittens: [
        { name: "SE* At Heart Eja SOM n Hona" },
        { name: "SE* At Heart Eje SOM n Hane" },
        { name: "SE* At Heart Ess SOM n Hane" },
      ]
    },
    {
      id: "D",
      name: "Kull D",
      birthDate: "2021-02-04",
      mother: "GIC Gloria von Müllers Mühle",
      father: "S* Limhamn's K.A. Leroux",
      image: litterD,
      kittens: [
        { name: "SE* At Heart Dax SOM n Hane" },
        { name: "SE* At Heart Day SOM n Hona" },
        { name: "SE* At Heart Dex SOM n Hane" },
        { name: "SE* At Heart Don SOM n Hane" },
      ]
    },
    {
      id: "C",
      name: "Kull C",
      birthDate: "2020-03-01",
      mother: "GIC Gloria von Müllers Mühle",
      father: "SP, SC FI* Vulpes Aither",
      image: litterC,
      kittens: [
        { name: "SE* At Heart Cat SOM n Hona" },
        { name: "SE* At Heart Cia SOM o Hona" },
        { name: "SE* At Heart Cim SOM n Hane" },
      ]
    },
    {
      id: "B",
      name: "Kull B",
      birthDate: "2019-04-19",
      mother: "GIC Gloria von Müllers Mühle",
      father: "S* Limhamn's K.A. Leroux",
      image: litterB,
      kittens: [
        { name: "SE* At Heart Ben SOM n Hane" },
        { name: "SE* At Heart Bez SOM n Hona" },
        { name: "SE* At Heart Bim SOM o Hona" },
        { name: "SE* At Heart Boy SOM n Hane" },
      ]
    },
    {
      id: "A",
      name: "Kull A",
      birthDate: "2018-06-22",
      mother: "GIC Gloria von Müllers Mühle",
      father: "S* Limhamn's K.A. Leroux",
      image: litterA,
      kittens: [
        { name: "SE* At Heart Ace SOM o Hane" },
        { name: "SE* At Heart Ash SOM n Hane" },
        { name: "SE* At Heart Aza SOM o Hona" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide text-left">
            Från A-kull 2018 till vår senaste kull
          </h1>

          {/* Litters List */}
          <div className="space-y-10">
            {litters.map((litter) => (
              <div key={litter.id} className="space-y-3">
                {/* Litter Image */}
                <div className="w-full max-w-4xl mx-auto flex justify-start">
                  <img
                    src={litter.image}
                    alt={`${litter.name} kattungar`}
                    className="h-[600px] w-auto object-contain rounded-lg"
                  />
                </div>

                {/* Litter Info */}
                <div className="text-brand-gold font-body space-y-2 text-sm md:text-base">
                  <h2 className="text-2xl md:text-3xl font-heading mb-4">{litter.name}</h2>
                  <p className="font-light">
                    <span className="font-bold">Född: {litter.birthDate}</span>
                  </p>
                  <p className="font-light">Mor: {litter.mother}</p>
                  <p className="font-light">Far: {litter.father}</p>
                </div>

                {/* Kittens List */}
                <div className="space-y-3 mt-6">
                  {litter.kittens.map((kitten, index) => (
                    <p
                      key={index}
                      className="text-brand-gold font-body font-light text-sm md:text-base"
                    >
                      {kitten.name}
                    </p>
                  ))}
                  <p className="text-brand-gold font-body font-light text-sm md:text-base mt-4">
                    Fler bilder
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kullar;
