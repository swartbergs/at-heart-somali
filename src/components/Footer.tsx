import certifications from "@/assets/certifications.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-light py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className="flex justify-center mb-8">
          <img 
            src={certifications} 
            alt="Certifierad uppfödare - UI-certifiering och medlemskap"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Copyright and membership */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-muted-foreground font-light">
            © 2025 At Heart Somali Cats — Medlem i SVERAK. Registrerat prefix: At Heart.
          </p>
        </div>
      </div>
    </footer>
  );
};
