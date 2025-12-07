import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

// PASTE YOUR IMAGE URL HERE (Keep the quotes!)
const NEW_CORPUS_IMAGE_URL = "https://fizmat.kz/wp-content/uploads/2025/02/almaty.jpg";

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fizmat-blue leading-tight">
              РФМШ 7-сыныпқа <span className="text-fizmat-red">қош келдің!</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
              Бұл платформа 7-сынып оқушыларына жаңа ортаға бейімделуге, сабақ үлгерімін жақсартуға және маңызды емтихандарға (АКР, СОР, СОЧ) дайындалуға көмектеседі.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#adaptation" 
                onClick={(e) => handleScroll(e, '#adaptation')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-fizmat-red hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Адаптацияға кеңестер
              </a>
              <a 
                href="#subjects" 
                onClick={(e) => handleScroll(e, '#subjects')}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-fizmat-blue text-base font-medium rounded-lg text-fizmat-blue bg-transparent hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Алгебра мен геометрия
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Image Column - Redesigned to match "New Corpus" style */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 flex h-64 md:h-[400px]">
               {/* Red Sidebar */}
               <div className="bg-fizmat-red w-1/3 sm:w-1/3 flex flex-col justify-end p-6 md:p-8 shrink-0 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent"></div>
                  <div className="relative z-10">
                      <h2 className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl leading-none uppercase tracking-tight">
                          Жаңа<br/>корпус
                      </h2>
                      <div className="w-10 h-1 bg-white/60 mt-4 rounded-full"></div>
                  </div>
               </div>
               
               {/* Building Image */}
               <div className="flex-1 relative bg-gray-100">
                 <img 
                   src={NEW_CORPUS_IMAGE_URL} 
                   alt="РФМШ Жаңа ғимараты" 
                   className="w-full h-full object-cover"
                 />
                 {/* Overlay for better integration */}
                 <div className="absolute inset-0 bg-gradient-to-r from-fizmat-red/10 to-transparent"></div>
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-fizmat-red/20 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;