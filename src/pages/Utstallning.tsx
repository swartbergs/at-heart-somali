import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ribbonsHero from "@/assets/ribbons-hero.jpg";
import showAward from "@/assets/show-award.png";
import showHofors1 from "@/assets/show-hofors-1.png";
import showHofors2 from "@/assets/show-hofors-2.png";
import showHofors3 from "@/assets/show-hofors-3.png";
import showHofors4 from "@/assets/show-hofors-4.png";
import showHofors5 from "@/assets/show-hofors-5.png";
import showGestrika from "@/assets/show-gestrika.png";
import showStockholm1 from "@/assets/show-stockholm-1.png";
import showStockholm2 from "@/assets/show-stockholm-2.png";
import showNykoping from "@/assets/show-nykoping.png";

const Utstallning = () => {
  const shows = [
    {
      date: "17 augusti 2025",
      location: "Bromma, SVERIGE",
      mainImage: showAward,
      gridImages: [],
      club: "Östkattens kattklubb",
      subtitle: "",
      results: [
        "SC SE* At Heart Fux DVM fick HP och blev BIV",
        "JCH KCH SE* Wingardiums Caspian fick CAC"
      ]
    },
    {
      date: "31 maj 2025",
      location: "Kumla, SVERIGE",
      mainImage: showHofors1,
      gridImages: [showHofors2, showHofors3, showHofors4, showHofors5],
      club: "Vi Kattägare kattklubb",
      subtitle: "Aby och Somali Breed BIS",
      results: [
        "SC SE* At Heart Fux DVM fick HP (Price of Honor)",
        "GIC SE* At Heart Cat fick CACS",
        "KCH JCH SE* At Heart Jes fick CACJ, NOM och BIS",
        "KCH SE* Wingardiums Caspian fick CACJ, Junior Champoin, BIV, NOM och BIS"
      ],
      dayLabel: "LÖRDAG"
    },
    {
      date: "10 maj 2025",
      location: "Hofors, SVERIGE",
      mainImage: showGestrika,
      gridImages: [],
      club: "Gestrika kattklubb",
      subtitle: "",
      results: [
        "GIC SE* At Heart Cat fick CACS och NOM",
        "KCH JCH SE* At Heart Jes fick CACJ",
        "KCH SE* Wingardiums Caspian fick CACJ och NOM"
      ]
    },
    {
      date: "12 april 2025",
      location: "Stockholm, SVERIGE",
      mainImage: showStockholm1,
      gridImages: [showStockholm2],
      club: "Stockholms kattklubb",
      subtitle: "",
      results: [
        "GIC SE* At Heart Cat fick CACS x 2, NOM i utställning B",
        "KCH JCH SE* At Heart Jes fick CACJ x 2",
        "KCH SE* Wingardiums Caspian fick CACJ x 2 och NOM i utställning A"
      ],
      dayLabel: "LÖRDAG UTSTÄLLNING A + B"
    },
    {
      date: "22, 23 mars 2025",
      location: "Nyköping, SVERIGE",
      mainImage: showNykoping,
      gridImages: [],
      club: "Östkattens kattklubb",
      subtitle: "",
      results: [
        "KCH JCH SE* At Heart Jes fick CACJ",
        "KCH SE* Wingardiums Caspian fick CAC och NOM"
      ],
      sundayResults: [
        "KCH JCH SE* At Heart Jes fick CACS och därmed Junior Champoin och BIV",
        "KCH SE* Wingardiums Caspian fick CACC, NOM och BIS"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        {/* Hero Image - Full Width */}
        <div className="w-full h-[500px] md:h-[600px] relative">
          <img
            src={ribbonsHero}
            alt="Utställningsrosetter och utmärkelser"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-12 font-heading uppercase tracking-wide text-center">
            Utställning och utmärkelser
          </h1>

          {/* Shows List */}
          <div className="space-y-12">
            {shows.map((show, index) => (
              <div key={index} className="space-y-6">
                {/* Date and Location - ÖVER bilden */}
                <div className="text-brand-gold font-body text-center">
                  <h2 className="text-xl md:text-2xl font-heading mb-1">
                    {show.date}
                  </h2>
                  <p className="text-lg font-light">
                    {show.location}
                  </p>
                </div>

                {/* Main Image */}
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    src={show.mainImage}
                    alt={`${show.club} utställning`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Grid Images (if any) */}
                {show.gridImages.length > 0 && (
                  <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
                    {show.gridImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${show.club} utställning bild ${idx + 2}`}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {/* Club and Results - UNDER bilden */}
                <div className="text-brand-gold font-body text-sm md:text-base text-center">
                  <h3 className="text-lg md:text-xl font-heading mb-1">
                    {show.club}
                  </h3>
                  {show.subtitle && (
                    <p className="text-base font-light mb-3">{show.subtitle}</p>
                  )}
                  <p className="font-bold mb-2">{show.dayLabel || "LÖRDAG"}:</p>
                  <div className="space-y-1 mb-4 font-light">
                    {show.results.map((result, idx) => (
                      <p key={idx}>{result}</p>
                    ))}
                  </div>
                  {show.sundayResults && (
                    <>
                      <p className="font-bold mb-2">SÖNDAG:</p>
                      <div className="space-y-1 mb-4 font-light">
                        {show.sundayResults.map((result, idx) => (
                          <p key={idx}>{result}</p>
                        ))}
                      </div>
                    </>
                  )}
                  <p className="font-light">Fler bilder</p>
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

export default Utstallning;
