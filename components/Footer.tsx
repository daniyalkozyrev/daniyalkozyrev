import React from 'react';
import { Book } from 'lucide-react';
import { BOOK_REFERENCES } from '../constants';

// PASTE YOUR FOOTER LOGO URL HERE
const FOOTER_LOGO_URL = "https://i.pinimg.com/736x/34/a5/21/34a5213441c0b26856ec54c553ceb176.jpg";

const Footer: React.FC = () => {
  return (
    <>
      <section id="references" className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-fizmat-blue mb-6 flex items-center">
              <Book className="mr-3" />
              Қолданылған әдебиеттер
            </h2>
            <ul className="space-y-4 mb-6">
              {BOOK_REFERENCES.map((book) => (
                <li key={book.id} className="text-gray-700 pl-4 border-l-4 border-gray-200">
                  {book.text}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 italic">
              * Интернет материалдарын пайдаланған кезде авторлық құқықты сақтап, дереккөзге сілтеме жасауды ұмытпаңыз.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-fizmat-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
             {/* Footer Logo Image */}
            <img 
              src={FOOTER_LOGO_URL} 
              alt="STARTF7 Logo" 
              className="h-10 w-10 rounded-full object-cover mx-auto mb-2 border-2 border-white"
            />
            <h3 className="text-xl font-bold tracking-wider">STARTF7</h3>
          </div>
          <p className="text-blue-100 font-light mb-6">
            7-сынып оқушыларына арналған бейімделу және оқу платформасы
          </p>
          <div className="w-16 h-1 bg-fizmat-red rounded-full mb-6"></div>
          <p className="text-xs text-blue-300/60 max-w-md">
            Бұл сайт тек білім беру мақсатында жасалған. Барлық материалдар оқу процесін қолдау үшін пайдаланылады.
            © {new Date().getFullYear()} Fizmat Start.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;