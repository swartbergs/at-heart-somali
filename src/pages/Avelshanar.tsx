import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import maleCatFox from "@/assets/male-cat-fox-new.png";
import catCaspian from "@/assets/cat-caspian.jpg";
import catAce from "@/assets/cat-ace.png";
import catLeroux from "@/assets/cat-leroux.png";
import catVulpes from "@/assets/cat-vulpes.jpg";
import catNeelix from "@/assets/cat-neelix.jpg";
import catOliviero from "@/assets/cat-oliviero.jpg";
import catMontgomeryScott from "@/assets/cat-montgomery-scott.jpg";
import catImo from "@/assets/cat-imo.jpg";
import catEss from "@/assets/cat-ess.png";

const Avelshanar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const studs = [
    {
      id: "fox",
      name: "SC SE*At Heart Fux, SOM n",
      image: maleCatFox,
      birthDate: "2022-06-07",
      mother: "SE*At Heart Bez, SOM n",
      father: "CH FI*Kisompa's Oliviero, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#",
      showMerits: language === 'sv' ? [
        "Årets bästa fertila Somali hane 2023",
        "Årets bästa fertila hane i grupp 4, plats 7, 2023",
        "Årets bästa viltfärgade Somali 2023",
        "Destinguish Varity Merit 2024",
        "Årets bästa fertila Somali hane 2024",
        "Årets bästa fertila hane i grupp 4 plats 5, 2024",
        "Årets bästa viltfärgade Somali 2024"
      ] : [
        "Best fertile Somali male 2023",
        "Best fertile male in group 4, place 7, 2023",
        "Best ruddy Somali 2023",
        "Distinguished Variety Merit 2024",
        "Best fertile Somali male 2024",
        "Best fertile male in group 4, place 5, 2024",
        "Best ruddy Somali 2024"
      ]
    },
    {
      id: "caspian",
      name: "JCH KCH SE Wingardiums Caspian, SOM p",
      image: catCaspian,
      birthDate: "2024-08-012",
      mother: "SE*Wingardiums Cassiega Soffice, SOM a",
      father: "Ernst, SOM p",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    }
  ];

  const retiredStuds = [
    {
      id: "ace",
      name: "GIC SE At Heart Ace, SOM o",
      image: catAce,
      birthDate: "2018-06-22",
      mother: "GIC Gloria von Müllers Mühler, SOM o",
      father: "S* Limhamn's .K.A. Leroux, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    }
  ];

  const borrowedStuds = [
    {
      id: "leroux",
      name: "S*Limhamnʼs K.A. Leroux, SOM n",
      image: catLeroux,
      birthDate: "2017-07-20",
      mother: "CH S* Limhamn's H.J. Kiowa, SOM n",
      father: "IC S*All Inclusive Argon Anders, ABY n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "vulpes",
      name: "SP, SC FI* Vulpes Aither, SOM n",
      image: catVulpes,
      birthDate: "2016-10-15",
      mother: "CH FI* Foxkiss Cissa thalassina, SOM n",
      father: "CH Foxgarden's Baron Barnsby, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "neelix",
      name: "CH Neelix des Minocs dʼArmor, ABY a",
      image: catNeelix,
      birthDate: "2017-08-08",
      mother: "Mystik des Minocs d'Armor, ABY a",
      father: "Liwanu du Roi de Coeur, ABY n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "oliviero",
      name: "CH FI* Kisompaʼs Oliviero, SOM n",
      image: catOliviero,
      birthDate: "2019-11-02",
      mother: "IC FI* Lamadegaan Fullmoon Shadow, SOM n",
      father: "SP, SC FI* Vulpes Aither, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "montgomery-scott",
      name: "S*Ianthelagens Montgomery Scott, SOM n",
      image: catMontgomeryScott,
      birthDate: "2022-03-13",
      mother: "CH S* Ianthelagens Adira Tal, ABY n",
      father: "IC (N) Kiachero Kiano, SOM a",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "imo",
      name: "Imo Impala av Rubicon, SOM n",
      image: catImo,
      birthDate: "2022-04-01",
      mother: "IC S* Catnip's Yungmaid Yasmin, SOM o",
      father: "Harry Hole av Rubicon, SOM n",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    },
    {
      id: "ess",
      name: "SE* At Heart Ess, SOM n",
      image: catEss,
      birthDate: "2021-02-22",
      mother: "SE* At Heart Bez, SOM n",
      father: "CH Neelix des Minocs d'Armor, ABY a",
      stamtavla: "Stamtavla",
      stamtavlaLink: "#",
      pkDef: "Normal",
      pkaRada: "Normal",
      bloodType: "A/AB",
      moreImagesLink: "#"
    }
  ];

  const CatCard = ({ cat, showMoreImages = true }: { cat: typeof studs[0]; showMoreImages?: boolean }) => (
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
            <span className="font-semibold">{t.studs.born}:</span> {cat.birthDate}
          </p>
          <p className="font-light whitespace-nowrap">
            <span className="font-semibold">{t.studs.mother}:</span> {cat.mother}
          </p>
          <p className="font-light">
            <span className="font-semibold">{t.studs.father}:</span> {cat.father}
          </p>
          {showMoreImages && (
            <div className="hidden md:flex gap-4">
              <a href="https://www.instagram.com/atheart_somalicats_cattery/" target="_blank" rel="noopener noreferrer" className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
                {t.studs.moreImages}
              </a>
            </div>
          )}
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
            <span className="font-semibold">{t.studs.bloodType}:</span> {cat.bloodType}
          </p>
        </div>
      </div>

      {/* Links - visible only on mobile, at the bottom */}
      {showMoreImages && (
        <div className="flex gap-4 md:hidden text-brand-gold font-body text-sm max-w-2xl mx-auto mt-4">
          <a href="https://www.instagram.com/atheart_somalicats_cattery/" target="_blank" rel="noopener noreferrer" className="font-light text-brand-gold/80 hover:text-brand-gold transition-colors">
            {t.studs.moreImages}
          </a>
        </div>
      )}

      {/* Show Merits Section */}
      {cat.showMerits && cat.showMerits.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-brand-gold text-xl font-heading mb-4">
            {t.studs.extraShowMerits}
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
          {/* Active Studs */}
          <section>
            <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide max-w-2xl mx-auto">
              {t.studs.title}
            </h1>

            <div className="space-y-16">
              {studs.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </section>

          {/* Retired Studs */}
          <section className="mt-24">
            <h2 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide max-w-2xl mx-auto">
              {language === 'sv' ? 'Pensionerade Hanar' : 'Retired Studs'}
            </h2>

            <div className="space-y-16">
              {retiredStuds.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
          </section>

          {/* Borrowed Studs */}
          <section className="mt-24">
            <h2 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide max-w-2xl mx-auto">
              {t.studs.borrowedStuds}
            </h2>

            <div className="space-y-16">
              {borrowedStuds.map((cat) => (
                <CatCard key={cat.id} cat={cat} showMoreImages={false} />
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
