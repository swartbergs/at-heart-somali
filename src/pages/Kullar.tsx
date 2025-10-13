import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import kullarHero from "@/assets/kullar-hero.png";

const Kullar = () => {
  const litters = [
    {
      id: "N-Kull",
      name: "N-Kull 2025-10-21",
      birthDate: "2025-10-00",
      mother: "GIC SE*At Heart Cat, SOM n",
      father: "JCH KCH SE*Wingardiums Caspian, SOM p",
      image: kullarHero,
      kittens: [
        { name: "At Heart Nix - Hane - Viltfärgad - SOM n", color: "text-brand-gold" },
        { name: "At Heart Nea - Hona - Sorrel - SOM o", color: "text-brand-gold" },
        { name: "At Heart Nia - Hona - Viltfärgad - SOM n", color: "text-brand-gold" },
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
          <div className="space-y-16">
            {litters.map((litter) => (
              <div key={litter.id} className="space-y-8">
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
                      className={`${kitten.color} font-body font-light text-sm md:text-base`}
                    >
                      {kitten.name}
                    </p>
                  ))}
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
