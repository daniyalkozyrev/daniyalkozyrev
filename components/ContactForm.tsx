import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-fizmat-blue">Кері байланыс</h2>
          <p className="text-gray-500 mt-2">Сұрақтарыңыз немесе қиындықтарыңыз болса, жазыңыз</p>
        </div>

        <form className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Аты-жөні</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fizmat-red focus:border-transparent outline-none transition-all"
                placeholder="Мысалы: Омаров Асан"
              />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">Сыныбы</label>
              <input 
                type="text" 
                id="grade" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fizmat-red focus:border-transparent outline-none transition-all"
                placeholder="7 'D'"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Қиындық тудырған пән</label>
            <select 
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fizmat-red focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Таңдаңыз...</option>
              <option value="algebra">Алгебра</option>
              <option value="geometry">Геометрия</option>
              <option value="physics">Физика</option>
              <option value="other">Басқа</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сұрағың / Қиындық</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fizmat-red focus:border-transparent outline-none transition-all resize-none"
              placeholder="Толығырақ жазыңыз..."
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="inline-flex items-center justify-center px-8 py-3 bg-fizmat-blue text-white font-bold rounded-full hover:bg-blue-900 transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
            >
              Жіберу <Send size={18} className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;