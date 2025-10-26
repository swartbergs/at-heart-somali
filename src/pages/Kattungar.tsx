import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import lKullImage from "@/assets/jes-med-l-kull.jpg";
import mKullImage from "@/assets/cat-med-m-kull.jpg";
import nKullImage from "@/assets/hei-med-n-kull.jpg";
const Kattungar = () => {
  const litters = [
    {
      id: "n-kull",
      name: "N-Kull 2025-10-23",
      birthDate: "2025-10-23",
      mother: "CH SE*At Heart Hei, SOM n",
      father: "SC SE*At Heart Fux DVM, SOM n",
      image: nKullImage,
      kittens: [
        { name: "Hane SOM a", status: "Ledig", statusColor: "bg-[#8CC4EC]", textColor: "text-[#8CC4EC]" },
        { name: "Hona SOM a", status: "Ledig", statusColor: "bg-[#F0A8C8]", textColor: "text-[#F0A8C8]" },
        { name: "Hane SOM n", status: "Ledig", statusColor: "bg-[#3B82F6]", textColor: "text-[#3B82F6]" },
        { name: "Hona SOM n", status: "Ledig", statusColor: "bg-[#F4D03F]", textColor: "text-[#F4D03F]" },
        { name: "Hona SOM o", status: "Ledig", statusColor: "bg-[#E8B4D9]", textColor: "text-[#E8B4D9]" },
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
        { name: "HANE SOM n", status: "Ledig", statusColor: "bg-[#3B82F6]", textColor: "text-[#3B82F6]" },
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
        { name: "Hona (gul) SOM n", status: "Ledig", statusColor: "bg-[#F4D03F]", textColor: "text-[#F4D03F]" },
        { name: "Hona (rosa) SOM n", status: "Ledig", statusColor: "bg-[#F0A8C8]", textColor: "text-[#F0A8C8]" },
        { name: "Hane (blå) SOM n", status: "Ledig", statusColor: "bg-[#3B82F6]", textColor: "text-[#3B82F6]" },
        { name: "Hane (ljusblå) SOM n", status: "Ledig", statusColor: "bg-[#8CC4EC]", textColor: "text-[#8CC4EC]" },
        { name: "Hane (grön) SOM n", status: "Ledig", statusColor: "bg-[#8B9A7E]", textColor: "text-[#8B9A7E]" },
      ]
    }
  ];

  return <div className="min-h-screen flex flex-col">
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

          {/* Litters Section */}
          <div className="space-y-16">
            {litters.map((litter) => (
              <div key={litter.id} className="space-y-8">
                {/* Litter Image */}
                <div className="w-full max-w-4xl mx-auto flex justify-start">
                  <img 
                    src={litter.image} 
                    alt={`${litter.name} kattunge kull`} 
                    className="h-[600px] w-auto object-contain rounded-lg" 
                  />
                </div>

                {/* Litter Info */}
                <div className="text-brand-gold font-body space-y-2 text-sm md:text-base">
                  <h2 className="text-2xl md:text-3xl font-heading mb-4">{litter.name}</h2>
                  <p className="font-light"><span className="font-bold">Född: {litter.birthDate}</span></p>
                  <p className="font-light">Mor: {litter.mother}</p>
                  <p className="font-light">Far: {litter.father}</p>
                </div>

                {/* Kittens List */}
                <div className="space-y-4 mt-8">
                  {litter.kittens.map((kitten, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-brand-gold/20">
                      <span className={`${kitten.textColor} font-body font-light text-sm md:text-base`}>
                        {kitten.name}
                      </span>
                      <Badge className={`${kitten.statusColor} text-brand-dark-green font-body text-xs md:text-sm px-4 py-1 hover:opacity-90`}>
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