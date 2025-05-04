
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fitness-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Espaço Harmonia</h3>
            <p className="mb-4">Transformando vidas através da orientação profissional em saúde e fitness.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/thiago.luiz13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@espacoharmonia.com.br" className="hover:text-gray-300">
                <Mail size={20} />
              </a>
              <a href="tel:+553197666203" className="hover:text-gray-300">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 list-none">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span>(31) 97666-203</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span>contato@espacoharmonia.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Rua Gumercindo Couto e Silva, 813 Sala 202 - Itapoã</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <img 
              src="/lovable-uploads/d9360aab-868b-4693-ab95-1c07da559291.png"
              alt="Horário de funcionamento" 
              className="rounded-lg w-full h-auto mb-4 shadow-md"
            />
            <ul className="space-y-2 list-none">
              <li>Segunda - Sexta: 07:00 - 21:00</li>
              <li>Sábados: 08:00 - 15:00</li>
              <li>Domingos: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>@thiago.luiz13</p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Espaço Harmonia - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
