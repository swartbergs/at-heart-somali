import heroCat from "@/assets/hero-cat.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <img
        src={heroCat}
        alt="En vacker somalikatt med gyllenbrun päls och intensiva bernstänsfärgade ögon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay for better text contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-brand-dark-green/40 via-transparent to-brand-dark-green/60"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative overline */}
        <p className="font-script text-3xl md:text-4xl text-brand-gold mb-4 drop-shadow-lg">
          Somali Cats Cattery
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-brand-gold drop-shadow-2xl mb-6">
          SE At Heart
        </h1>
      </div>
    </section>
  );
};
