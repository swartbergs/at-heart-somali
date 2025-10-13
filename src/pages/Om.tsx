import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import piaWithCats from "@/assets/pia-with-cats.jpg";

const Om = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Portrait Image */}
          <div className="mb-8">
            <img
              src={piaWithCats}
              alt="Pia Ringholm med två Somalikatter"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-8 font-heading">
            Om mig och min kattuppfödning.
          </h1>

          {/* Main Content */}
          <div className="space-y-4 text-brand-gold font-body font-light leading-normal">
            <p>
              Jag heter Pia Ringholm och bor tillsammans med min man Tom, våra Somalikatter och två hundar i ett hus bara 15 minuter utanför Stockholm på ön Lidingö.
            </p>

            <p>
              1999 köpte jag min första Somalikatt. Han var en viltfärgad hane, med namnet S*Walkabout's Solo Luke Ruddyson, och vi kallade honom helt enkelt för Solo. Det var kärlek vid första ögonkastet och mitt hjärta tillhör fortfarande kattrasen Somali.
            </p>

            <p>
              2017 startade jag mitt eget katteri; SE*At Heart, och min första kull föddes 2018.
            </p>

            <p>
              Mitt mål är att avla friska och vackra Somalikatter med en vänlig och härlig personlighet. Jag lägger stor vikt på trygghet, socialisering, miljöträning och närvaro i vardagen. Alla katter och kattungar är en del av vår familj och bor tillsammans med oss i vårt hus. Jag är hemma på dagtid och våra kattungar föds i en trygg hemmiljö med mycket omsorg, kärlek och social kontakt.
            </p>

            <p>
              Jag har 2-3 kullar/år. och är mycket noga med att välja ut rätt hane till honan och den kommande kullen. Om jag inte hittar någon som jag tror uppfyller mina krav på utseende, personlighet och hälsa så blir det ingen kull, då väntar jag hellre.
            </p>

            <p>
              Jag välkomnar alla godkända färger men viltfärgen är min favorit.
            </p>

            <p>
              Alla avelskatter är testade för PRA och PK.
            </p>

            <p>
              Kattungarna lämnar oss tidigast vid 12-14 veckor . Då är de veterinärbesiktigade, vaccinerade, idmärkta och registrerade med stamtavla. varje kattunge får ett startpaket och livslång support från oss.
            </p>

            {/* List Section */}
            <div className="mt-8">
              <p className="mb-4">En kattunge från mig är:</p>
              <ul className="space-y-2 ml-6">
                <li>* Minst 12-14 veckor gammal innan flytt till ett nytt hem</li>
                <li>* Vaccinerad två gånger</li>
                <li>* Registrerad i SVERAK, FiFe</li>
                <li>* Stamtavla</li>
                <li>* Har ett ID-chip</li>
                <li>* Veterinärbesiktigad inom en vecka innan avresa till ett nytt hem</li>
                <li>* Rabiesvaccination (vid flytt utomlands)</li>
                <li>* Försäkrad i Sveland</li>
                <li>* Ett paket med mat och en filt.</li>
              </ul>
            </div>

            <p className="mt-8">
              Jag är styrelseledamot i AbSolut Cat-club där jag är avelssekreterare.
            </p>

            <p>
              Jag har uppfödardiplom från SVERAK och är utbildad i SVERAKs avelsskola (UppfödarEttan) och har min certifiering.
            </p>

            <p>
              Jag är med i AbSolut kattklubb som ingår i SVERAK (Sveriges Kattrasföreningars Riksförbund)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Om;
