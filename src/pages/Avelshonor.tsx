import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import piaWithCats from "@/assets/pia-with-cats.jpg";

const Avelshonor = () => {
  const activeQueens = [
    {
      id: "cat-1",
      name: "GIC SE*At Heart Cat, SOM n",
      image: piaWithCats,
      birthDate: "2020-03-01",
      mother: "GIC Gloria von Müllers Mühle, SOM o",
      father: "SE*Urlvet Adler, SOM n",
      stamtavla: "Stamtavla",
      pkDef: "Normal",
      pkaRada: "Bärare",
      bloodType: "A/AB",
      genes: "Anlag för sorrel el dilution"
    }
  ];

  const retiredQueens = [
    {
      id: "gloria",
      name: "GIC Gloria von Müllers Mühle, SOM o",
      image: piaWithCats,
      birthDate: "2016-12-08",
      mother: "Foxgarden's Fatha Yar, SOM o",
      father: "Elsa von Müllers Mühle, SOM o",
      stamtavla: "Stamtavla",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      genes: "Mor bilder"
    }
  ];

  const CatCard = ({ cat }: { cat: typeof activeQueens[0] }) => (
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
          <p className="font-light text-brand-gold/80">{cat.stamtavla}</p>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <p className="font-light">
            <span className="font-semibold">PK def:</span> {cat.pkDef}
          </p>
          <p className="font-light">
            <span className="font-semibold">PKA (råda):</span> {cat.pkaRada}
          </p>
          <p className="font-light">
            <span className="font-semibold">Blodgrupp:</span> {cat.bloodType}
          </p>
          <p className="font-light text-brand-gold/80">{cat.genes}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          {/* Active Queens Section */}
          <section className="mb-20">
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide text-center">
              Avelshonor
            </h1>

            <div className="space-y-16">
              {activeQueens.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </section>

          {/* Retired Queens Section */}
          <section>
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide text-center">
              Pensionerade Honor
            </h1>

            <div className="space-y-16">
              {retiredQueens.map((cat) => (
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

export default Avelshonor;
