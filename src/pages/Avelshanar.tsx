import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import maleCatFox from "@/assets/male-cat-fox-new.png";

const Avelshanar = () => {
  const studs = [
    {
      id: "fox",
      name: "SC SE*At Heart Fox, SOM n",
      image: maleCatFox,
      birthDate: "2022-06-07",
      mother: "SE*At Heart Bez, SOM n",
      father: "CH FI*Kisompa's Oliviero, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      genes: "Anlag för dilution",
      moreImagesLink: "#",
      showMerits: [
        "Årets bästa fertila Somali hane 2023",
        "Årets bästa fertila hane i grupp 4, plats 7, 2023",
        "Årets bästa viltfärgade Somali 2023",
        "Destinguish Varity Merit 2024",
        "Årets bästa fertila Somali hane 2024",
        "Årets bästa fertila hane i grupp 4 plats 5, 2024",
        "Årets bästa viltfärgade Somali 2024"
      ]
    }
  ];

  const CatCard = ({ cat }: { cat: typeof studs[0] }) => (
    <div className="space-y-6">
      {/* Cat Image */}
      <div className="w-full max-w-2xl mx-auto">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Cat Name */}
      <h2 className="text-brand-gold text-2xl md:text-3xl font-heading text-center">
        {cat.name}
      </h2>

      {/* Cat Info - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-brand-gold font-body text-sm md:text-base max-w-2xl mx-auto">
        {/* Left Column */}
        <div className="space-y-2">
          <p className="font-light">
            <span className="font-semibold">Född:</span> {cat.birthDate}
          </p>
          <p className="font-light">
            <span className="font-semibold">Mor:</span> {cat.mother}
          </p>
          <p className="font-light">
            <span className="font-semibold">Far:</span> {cat.father}
          </p>
          <div className="flex gap-4">
            <a href={cat.stamtavlaLink} className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
              {cat.stamtavla}
            </a>
            <a href={cat.moreImagesLink} className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
              Fler bilder
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <p className="font-light">
            <span className="font-semibold">PK def:</span> {cat.pkDef}
          </p>
          <p className="font-light">
            <span className="font-semibold">PKA (rdAc):</span> {cat.pkaRada}
          </p>
          <p className="font-light">
            <span className="font-semibold">Blodgrupp:</span> {cat.bloodType}
          </p>
          {cat.genes && (
            <p className="font-light text-brand-gold/80">{cat.genes}</p>
          )}
        </div>
      </div>

      {/* Show Merits Section */}
      {cat.showMerits && cat.showMerits.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-brand-gold text-xl font-heading mb-4">
            Extra utstållnings meriter:
          </h3>
          <ul className="space-y-2 text-brand-gold font-body text-sm md:text-base">
            {cat.showMerits.map((merit, index) => (
              <li key={index} className="font-light">
                {merit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <section>
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide text-center">
              Avelshanar
            </h1>

            <div className="space-y-16">
              {studs.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Avelshanar;
