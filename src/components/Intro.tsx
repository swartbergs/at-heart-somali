export const Intro = () => {
  return (
    <section className="w-full bg-brand-dark-green py-32 md:py-40 lg:py-48">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Brand promise */}
        <p className="text-brand-gold text-base md:text-lg leading-relaxed mb-12 font-light">
          En liten uppfödning av katten rasen Somali i hemmiljö, med fokus på hälsa, temperament och utseende (som följer Fife rasstandard för Somalikatter).
        </p>

        {/* Decorative welcome */}
        <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-brand-gold mt-12">
          Välkommen!
        </h2>
      </div>
    </section>
  );
};
