
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-fitness-primary shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0bfd4478-30da-45f4-a03c-701406e5924e.png" 
            alt="Espaço Harmonia Logo" 
            className="h-10 md:h-12 mr-3"
          />
          <h1 className="text-2xl font-bold text-white">Espaço Harmonia</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-gray-200 transition-colors">Home</a>
          <a href="#planos" className="text-white hover:text-gray-200 transition-colors">Planos</a>
          <a href="#contato" className="text-white hover:text-gray-200 transition-colors">Contato</a>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-fitness-primary md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 items-center">
              <a 
                href="#home" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#planos" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#contato" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
