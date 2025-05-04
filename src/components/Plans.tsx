import React, { useState, useEffect } from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface PlanCardProps {
  title: string;
  price: number;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const PlanCard = ({ title, price, period, features, cta, highlighted = false }: PlanCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`fade-in-element ${isVisible ? 'appear' : ''} rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        highlighted ? 'transform hover:-translate-y-2 border-4 border-fitness-secondary' : 'transform hover:-translate-y-1 border border-gray-200'
      }`}
    >
      <div className={`p-6 ${highlighted ? 'bg-fitness-primary text-white' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">R${price}</span>
          <span className="ml-2 text-sm text-gray-400">{period}</span>
        </div>
      </div>
      <div className="bg-white p-6">
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-fitness-secondary flex-shrink-0" />
              <span className="text-gray-700 list-none">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/553197666203"
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-3 px-4 text-center rounded-md ${
            highlighted 
              ? 'bg-fitness-secondary hover:bg-fitness-accent text-white' 
              : 'bg-white border-2 border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white'
          } transition-colors`}
        >
          <span className="flex items-center justify-center">
            {cta} <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  );
};

const Plans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const planFeatures = [
    'Plano de Treino',
    'Planejamento Alimentar',
    'Recomendação de suplementos e manipulados',
    'Protocolos hormonais (opcionais)',
    'Avaliação da evolução do aluno de 30 em 30 dias',
    'Contato via WhatsApp diretamente com Thiago'
  ];

  const additionalFeatures = [
    'Avaliação postural completa',
    'Medidas e bioimpedância',
    '3 reavaliações durante os 90 dias'
  ];

  return (
    <section id="planos" ref={sectionRef} className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className={`section-heading fade-in-element ${isVisible ? 'appear' : ''}`}>
          Nossos Planos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PlanCard 
            title="Consultoria Online"
            price={300}
            period="90 dias de acompanhamento"
            features={planFeatures}
            cta="Contratar agora"
          />
          
          <PlanCard 
            title="Consultoria Presencial"
            price={450}
            period="90 dias de acompanhamento"
            features={[...planFeatures, ...additionalFeatures]}
            cta="Contratar agora"
            highlighted
          />
          
          <PlanCard 
            title="Planos Avulsos"
            price={120}
            period="a partir de"
            features={[
              'Planejamento Alimentar - R$ 180',
              'Ficha de Treino - R$ 120',
              'Protocolo Completo - R$ 220',
              'Montagem de Ciclos - R$ 60',
              'TPC - R$ 150',
              'Entrega em até 3 dias úteis'
            ]}
            cta="Saiba mais"
          />
        </div>
        
        <div className={`mt-16 text-center max-w-3xl mx-auto fade-in-element ${isVisible ? 'appear' : ''}`}>
          <h3 className="text-2xl font-bold text-fitness-primary mb-4">
            Espaço Harmonia desenvolve seu protocolo completo.
          </h3>
          <p className="text-lg mb-6">
            <strong>Missão:</strong> Fazer você alcançar a sua melhor versão!
          </p>
          <a 
            href="https://wa.me/553197666203" 
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agende sua avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
