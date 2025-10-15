import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ribbonsHero from "@/assets/ribbons-hero.jpg";
import showAward from "@/assets/show-award.png";

const Utstallning = () => {
  const shows = [
    {
      date: "17 augusti 2025",
      location: "Bromma, SVERIGE",
      image: showAward,
      club: "Östkattens kattklubb",
      results: [
        "SC SE* At Heart Fux DVM fick HP och blev BIV",
        "JCH KCH SE* Wingardiums Caspian fick CAC"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        {/* Hero Image - Full Width */}
        <div className="w-full h-[400px] md:h-[500px] relative">
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
              <div key={index} className="space-y-4">
                {/* Date and Location */}
                <div className="text-brand-gold font-body">
                  <h2 className="text-xl md:text-2xl font-heading mb-1">
                    {show.date}
                  </h2>
                  <p className="text-lg font-light mb-6">
                    {show.location}
                  </p>
                </div>

                {/* Show Image */}
                <div className="w-full max-w-md mx-auto mb-6">
                  <img
                    src={show.image}
                    alt={`${show.club} utställning`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Club and Results */}
                <div className="text-brand-gold font-body text-sm md:text-base">
                  <h3 className="text-lg md:text-xl font-heading mb-3">
                    {show.club}
                  </h3>
                  <p className="font-bold mb-2">LÖRDAG:</p>
                  <div className="space-y-1 mb-4 font-light">
                    {show.results.map((result, idx) => (
                      <p key={idx}>{result}</p>
                    ))}
                  </div>
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
