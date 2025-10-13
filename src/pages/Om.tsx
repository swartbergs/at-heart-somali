import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Om = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Portrait Image */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <img
                src="/placeholder.svg"
                alt="Pia Ringholm med två Somalikatter"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-brand-gold text-3xl md:text-4xl mb-8 font-heading">
            Om mig och min kattuppfödning.
          </h1>

          {/* Main Content */}
          <div className="space-y-6 text-brand-gold font-body font-light leading-relaxed">
            <p>
              Jag heter Pia Ringholm och bor tillsammans med min man Tom, våra Somalikatter och två hundar i ett hus i Löddeköpinge, utanför Lund i södra Sverige, inte långt från Malmö och Lund i Skåne.
            </p>

            <p>
              1999 köpte jag min första Somalikatt. Han var en vildfärgad hane, med namnet S*Walkabout's Solo Luke Ruddybush, och vi kallade honom helt enkelt för Solo. Det var kärlek vid första ögonkastet och mitt hjärta tillhör fortfarande katten Somali.
            </p>

            <p>
              2017 startade jag mitt eget katteri; SE*At Heart, och min lista blev laddade 2018.
            </p>

            <p>
              Mitt mål är att avla fram Somalikatter med en väsnlig och ledig personlighet. Jag lägger stor vikt på trygghet, socialisering, miljöträning och närvaro i vardagen. Alla katter och kattungar är en del av vår familj och bor tillsammans med oss i vårt hus. Jag är hemma på dagid och våra kattungar föds i mitt eget hemmet med mig väldigt nära som står redo att väga och hjälpa.
            </p>

            <p>
              Jag har 2-3 kullar/år, och är mycket noga med att välja ut rätt hane till honan och det kommande paret. Om jag inte själv råkar som jag tror uppfyller mina krav på utseende, personlighet och hälsa så blir det ingen kull, då väntar jag hellre.
            </p>

            <p>
              Jag välkomnar alla gästande färger men villröran är min favorit!
            </p>

            <p>
              Alla avelskattor är testade för PKA och PK.
            </p>

            <p>
              Kattungarna lämnar oss tidigast vid 12-14 veckor. Då är de veterinärbesiktigade, vaccinerade, id-märkta och registrerade med stamtavla; varje kattunge får ett startpaket och livslång support från oss.
            </p>

            {/* List Section */}
            <div className="mt-8">
              <p className="mb-4">En kattunge från mig är:</p>
              <ul className="space-y-2 ml-6">
                <li>* Minst 12-14 veckor gammal innan flytt till ett nytt hem</li>
                <li>* Vaccinerad två gånger</li>
                <li>* Registrerad i SVERAK, Fife</li>
                <li>* Stamtavla</li>
                <li>* Har ett ID-chip</li>
                <li>* Veterinärbesiktigas innan en vecka innan avresan till ett nytt hem</li>
                <li>* Rabiesvaccination (vid flytt utomlands)</li>
                <li>* Försäkrad i Sveland</li>
                <li>* Ett paket med mat och en filt.</li>
              </ul>
            </div>

            <p className="mt-8">
              Jag är avelsledamot i AbSolut Cat-club där jag är avelssekreterare.
            </p>

            <p>
              Jag har uppfödarddiplom från SVERAK och är utbildad i SVERAKs avelsskola (UppdödarEllen) och har min certifiering.
            </p>

            <p>
              Jag är med i AbSolut kattklubb som ingår i SVERAK (Sveriges Kattrösföreningars Riksförbund)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Om;
