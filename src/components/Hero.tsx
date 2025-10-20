import heroCat from "@/assets/hero-cat-bez-3.jpg";
import atHeartLogo from "@/assets/at-heart-logo-text.png";

export const Hero = () => {
  return <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] flex items-center justify-start overflow-hidden">
      {/* Hero Image */}
      <img src={heroCat} alt="En vacker somalikatt med gyllenbrun päls och intensiva bernstänsfärgade ögon" className="absolute inset-0 w-full h-full object-cover object-[center_30%] md:object-center" />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-green/20 via-transparent to-brand-dark-green/40" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 pl-8 md:pl-32 lg:pl-40 self-start pt-12 md:pt-32">
        <img 
          src={atHeartLogo} 
          alt="SE At Heart - Somali Cats Cattery" 
          className="w-[220px] md:w-[380px] lg:w-[480px] h-auto"
        />
      </div>
    </section>;
};