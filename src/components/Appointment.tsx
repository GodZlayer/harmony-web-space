
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';

const Appointment = () => {
  const [selectedService, setSelectedService] = useState('');
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

  const encodeWhatsAppMessage = () => {
    return encodeURIComponent(`Olá, gostaria de agendar uma consulta para o plano: ${selectedService || 'Consultoria'}.`);
  };

  return (
    <section id="contato" ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className={`text-center mb-12 fade-in-element ${isVisible ? 'appear' : ''}`}>
          <img 
            src="/lovable-uploads/e4ebd22e-1bed-4997-805d-4f07a0f2fed7.png"
            alt="Espaço Harmonia Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h2 className="section-heading">Agende sua Consulta</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Marque uma avaliação personalizada com nosso especialista Thiago e descubra o tratamento ideal para suas necessidades físicas e de saúde.
          </p>
        </div>
        
        <Card className={`max-w-2xl mx-auto shadow-lg fade-in-element ${isVisible ? 'appear' : ''} border-t-4 border-t-fitness-primary`}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-fitness-primary" />
              Agendamento
            </CardTitle>
            <CardDescription>Selecione o plano desejado para prosseguir</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service">Serviço</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Consultoria Presencial">Consultoria Presencial</SelectItem>
                    <SelectItem value="Consultoria Online">Consultoria Online</SelectItem>
                    <SelectItem value="Consultoria Sem Acompanhamento">Consultoria Sem Acompanhamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-end">
            <Button
              variant="default"
              className="bg-fitness-secondary hover:bg-fitness-accent text-white"
              asChild
              disabled={!selectedService}
            >
              <a
                href={`https://wa.me/553197666203?text=${encodeWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar no WhatsApp
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Appointment;
