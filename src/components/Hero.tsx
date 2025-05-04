
import { useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Removemos o useEffect com o efeito parallax que fazia a imagem se mover

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 63, 45, 0.85), rgba(0, 63, 45, 0.85)), url("/lovable-uploads/602b4879-226a-4790-872e-c406e597abc4.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Mantemos isso para garantir que a imagem fique fixa
      }}
    >
      <div className="container mx-auto py-36 md:py-52">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Transforme sua vida com orientação profissional
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 animate-fade-in">
          Consultoria fitness personalizada com atendimento presencial e online. 
          Sua evolução começa agora.
        </p>
        <a 
          href="https://wa.me/553197666203" 
          className="whatsapp-btn text-lg animate-fade-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com Thiago no WhatsApp
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#planos" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
