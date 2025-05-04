
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import Appointment from '@/components/Appointment';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' 
      }
    );
    
    // Target all elements with the fade-in-element class
    document.querySelectorAll('.fade-in-element').forEach(element => {
      observer.observe(element);
    });
    
    // Welcome toast
    setTimeout(() => {
      toast.success('Bem-vindo ao Espaço Harmonia!', {
        description: 'Descubra como podemos ajudar na sua transformação.',
        duration: 5000,
      });
    }, 2000);
    
    return () => {
      document.querySelectorAll('.fade-in-element').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Plans />
      <Appointment />
      <Footer />
    </div>
  );
};

export default Index;
