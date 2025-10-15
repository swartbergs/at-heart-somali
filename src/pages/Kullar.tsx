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
        { name: "SE* At Heart Jes", code: "", gender: "Hona" },
        { name: "SE* At Heart Joy", code: "", gender: "Hona" },
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
        { name: "SE* At Heart Ian", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Ice", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Izo", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Hei", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Hie", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Hux", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Fay", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Fix", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Fux", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Eja", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Eje", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Ess", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Dax", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Day", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Dex", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Don", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Cat", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Cia", code: "SOM o", gender: "Hona" },
        { name: "SE* At Heart Cim", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Ben", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Bez", code: "SOM n", gender: "Hona" },
        { name: "SE* At Heart Bim", code: "SOM o", gender: "Hona" },
        { name: "SE* At Heart Boy", code: "SOM n", gender: "Hane" },
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
        { name: "SE* At Heart Ace", code: "SOM o", gender: "Hane" },
        { name: "SE* At Heart Ash", code: "SOM n", gender: "Hane" },
        { name: "SE* At Heart Aza", code: "SOM o", gender: "Hona" },
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
              <div key={litter.id} className="space-y-4">
                {/* Litter Image */}
                <div className="w-full max-w-4xl mx-auto flex justify-start">
                  <img
                    src={litter.image}
                    alt={`${litter.name} kattungar`}
                    className="h-[600px] w-auto object-contain rounded-lg"
                  />
                </div>

                {/* Litter Name - centered below image */}
                <h2 className="text-brand-gold text-2xl md:text-3xl font-heading text-center">
                  {litter.name}
                </h2>

                {/* Litter Info */}
                <div className="text-brand-gold font-body text-sm md:text-base">
                  <p className="font-light mb-2">
                    <span className="font-bold">Född: {litter.birthDate}</span>
                  </p>
                  <p className="font-light mb-4 flex gap-12">
                    <span>Mor: {litter.mother}</span>
                    <span>Far: {litter.father}</span>
                  </p>
                  
                  {/* Kittens List */}
                  <div className="space-y-1 mb-4">
                    {litter.kittens.map((kitten, index) => (
                      <div key={index} className="flex gap-8 font-light">
                        <span className="flex-shrink-0 w-40">{kitten.name}</span>
                        <span className="flex-shrink-0 w-16">{kitten.code}</span>
                        <span>{kitten.gender}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="font-light">
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
