import React from 'react';
import { ALUMNI_LIST } from '../constants';

const Alumni: React.FC = () => {
  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-fizmat-blue text-center mb-16 uppercase tracking-wider">
          Известные выпускники
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ALUMNI_LIST.map((person) => (
            <div key={person.id} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <img 
                  src={person.imageUrl} 
                  alt={person.name} 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-fizmat-red object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-100"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-fizmat-red transition-all duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-fizmat-red uppercase mb-2 tracking-wide leading-tight px-2">
                {person.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs px-2">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;