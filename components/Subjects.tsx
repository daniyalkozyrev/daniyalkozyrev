import React from 'react';
import { Box, Triangle } from 'lucide-react';

const Subjects: React.FC = () => {
  const algebraTopics = [
    "Натурал және бүтін көрсеткішті дәреже",
    "Санның стандарт түрі",
    "Жуық мәндер және қателіктер",
    "Бөлінгіштік белгілері, ЕҮОБ және ЕКОЕ",
    "Бірмүшелер және көпмүшелер",
    "Қысқаша көбейту формулалары",
    "Алгебралық бөлшектер"
  ];

  const geometryTopics = [
    "Геометрияның алғашқы ұғымдары (Нүкте, Түзу)",
    "Бұрыштар және олардың түрлері",
    "Үшбұрыштар (тең бүйірлі, тең қабырғалы)",
    "Үшбұрыштардың теңдік белгілері",
    "Параллель түзулер",
    "Түзу мен жазықтықтың өзара орналасуы",
    "Көпбұрыштар"
  ];

  return (
    <section id="subjects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fizmat-blue text-center mb-12">
          7-сынып алгебра және геометрия тақырыптары
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Algebra */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group hover:border-fizmat-blue transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Box size={120} className="text-fizmat-blue" />
            </div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-lg mr-4 text-fizmat-blue">
                <Box size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Алгебра</h3>
            </div>
            <ul className="space-y-3 relative z-10">
              {algebraTopics.map((topic, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-fizmat-blue rounded-full mr-3 shrink-0"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Geometry */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group hover:border-fizmat-red transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Triangle size={120} className="text-fizmat-red" />
            </div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-100 rounded-lg mr-4 text-fizmat-red">
                <Triangle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Геометрия</h3>
            </div>
            <ul className="space-y-3 relative z-10">
              {geometryTopics.map((topic, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-fizmat-red rounded-full mr-3 shrink-0"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;