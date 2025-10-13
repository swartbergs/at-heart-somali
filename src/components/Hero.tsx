import heroCat from "@/assets/hero-cat-new.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-start overflow-hidden">
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
      <div className="relative z-10 pl-24 md:pl-32 lg:pl-40 self-start pt-24 md:pt-32">
        {/* Decorative overline */}
        <p className="font-script text-3xl md:text-4xl text-brand-gold mb-2 drop-shadow-lg">
          Somali Cats Cattery
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-gold drop-shadow-2xl mb-6">
          SE*At Heart
        </h1>
      </div>
    </section>
  );
};
