import heroCat from "@/assets/hero-cat-with-logo.png";
import atHeartLogo from "@/assets/at-heart-logo-text.png";

export const Hero = () => {
  return <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-start overflow-hidden">
      {/* Hero Image */}
      <img src={heroCat} alt="En vacker somalikatt med gyllenbrun päls och intensiva bernstänsfärgade ögon" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-green/40 via-transparent to-brand-dark-green/60" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 pl-24 md:pl-32 lg:pl-40 self-start pt-24 md:pt-32">
        <img 
          src={atHeartLogo} 
          alt="SE At Heart - Somali Cats Cattery" 
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
        />
      </div>
    </section>;
};