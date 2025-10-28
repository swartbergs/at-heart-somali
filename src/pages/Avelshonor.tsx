import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import catActive from "@/assets/cat-active.png";
import catRetired from "@/assets/cat-retired.png";
import catBez from "@/assets/cat-bez.jpg";
import catHei from "@/assets/cat-hei.jpg";
import catJes from "@/assets/cat-jes.jpg";

const Avelshonor = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const activeQueens = [{
    id: "cat-1",
    name: "GIC SE*At Heart Cat, SOM n",
    image: catActive,
    birthDate: "2020-03-01",
    mother: "GIC Gloria von Müllers Mühle, SOM o",
    father: "SC FI*Vulpes Aither, SOM n",
    pkDef: language === 'sv' ? "Normal" : "Normal",
    pkaRada: language === 'sv' ? "Bärare" : "Carrier",
    bloodType: "A/AB"
  }, {
    id: "cat-hei",
    name: "CH SE*At Heart Hei, SOM n",
    image: catHei,
    birthDate: "2023-03-31",
    mother: "GIC SE*At Heart Cat, SOM n",
    father: "S*Lanthelagens Montgomery Scott, SOM n",
    pkDef: language === 'sv' ? "Normal" : "Normal",
    pkaRada: language === 'sv' ? "Bärare" : "Carrier",
    bloodType: "A/AB"
  }, {
    id: "cat-jes",
    name: "JC KCH SE*At Heart Jes, SOM n",
    image: catJes,
    birthDate: "2024-06-14",
    mother: "GIC SE*At Heart Cat, SOM n",
    father: "SE*At Heart Ess, SOM n",
    pkDef: language === 'sv' ? "Normal" : "Normal",
    pkaRada: language === 'sv' ? "Normal" : "Normal",
    bloodType: "A/AB"
  }];

  const retiredQueens = [{
    id: "bez",
    name: "SE*At Heart Bez, SOM n",
    image: catBez,
    birthDate: "2019-04-19",
    mother: "GIC Gloria von Müllers Mühler, SOM o",
    father: "S* Limhamn's .K.A. Leroux, SOM n",
    pkDef: language === 'sv' ? "Normal" : "Normal",
    pkaRada: language === 'sv' ? "Normal" : "Normal",
    bloodType: "A/AB"
  }, {
    id: "gloria",
    name: "GIC Gloria von Müllers Mühle, SOM o",
    image: catRetired,
    birthDate: "2016-12-08",
    mother: "Foxgarden's Tasha Yar, SOM o",
    father: "Elvis von Müllers Mühle, SOM p",
    pkDef: language === 'sv' ? "Normal" : "Normal",
    pkaRada: language === 'sv' ? "Normal" : "Normal",
    bloodType: "A/AB"
  }];

  const CatCard = ({ cat }: { cat: typeof activeQueens[0] }) => (
    <div className="space-y-6">
      <div className="w-full max-w-2xl mx-auto">
        <img src={cat.image} alt={cat.name} className="w-full h-auto object-cover rounded-lg" />
      </div>
      <h2 className="text-brand-gold text-2xl md:text-3xl font-heading text-center">
        {cat.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-brand-gold font-body text-sm md:text-base max-w-2xl mx-auto">
        <div className="space-y-2">
          <p className="font-light">
            <span className="font-semibold">{t.queens.born}:</span> {cat.birthDate}
          </p>
          <p className="font-light">
            <span className="font-semibold">{t.queens.mother}:</span> {cat.mother}
          </p>
          <p className="font-light whitespace-nowrap">
            <span className="font-semibold">{t.queens.father}:</span> {cat.father}
          </p>
          <div className="hidden md:flex gap-4">
            <a href="https://www.instagram.com/atheart_somalicats_cattery/" target="_blank" rel="noopener noreferrer" className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
              {t.queens.moreImages}
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-light">
            <span className="font-semibold">PK def:</span> {cat.pkDef}
          </p>
          <p className="font-light">
            <span className="font-semibold">PKA (rdAc):</span> {cat.pkaRada}
          </p>
          <p className="font-light">
            <span className="font-semibold">{language === 'sv' ? 'Blodgrupp' : 'Blood type'}:</span> {cat.bloodType}
          </p>
        </div>
      </div>
      <div className="flex gap-4 md:hidden text-brand-gold font-body text-sm max-w-2xl mx-auto mt-4">
        <a href="https://www.instagram.com/atheart_somalicats_cattery/" target="_blank" rel="noopener noreferrer" className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
          {t.queens.moreImages}
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <section className="mb-20">
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide max-w-2xl mx-auto">
              {t.queens.title}
            </h1>
            <div className="space-y-16">
              {activeQueens.map(cat => <CatCard key={cat.id} cat={cat} />)}
            </div>
          </section>
          <section>
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide max-w-2xl mx-auto">
              {t.queens.retired}
            </h1>
            <div className="space-y-16">
              {retiredQueens.map(cat => <CatCard key={cat.id} cat={cat} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Avelshonor;
