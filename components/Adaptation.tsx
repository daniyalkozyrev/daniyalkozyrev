import React from 'react';
import { CheckCircle, Heart } from 'lucide-react';

const Adaptation: React.FC = () => {
  return (
    <section id="adaptation" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fizmat-blue text-center mb-10">
          7-сынып оқушыларына бейімделу кеңестері
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Study Advice */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-fizmat-blue hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="text-fizmat-blue mr-2" />
              Оқу кеңестері
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">1</span>
                Күн тәртібін қатаң сақтау: ұйқы, сабақ және демалысты дұрыс жоспарлау.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">2</span>
                Алгебра және геометрия формулаларын күнделікті қайталау (жаңа тақырыптар көп).
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">3</span>
                СОР және СОЧ кестесін алдын ала біліп, соңғы күнге қалдырмай дайындалу.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">4</span>
                Түсінбеген тақырыпты мұғалімнен немесе сыныптастардан сұрауға ұялмау.
              </li>
            </ul>
          </div>

          {/* Psychological Advice */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-fizmat-red hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Heart className="text-fizmat-red mr-2" />
              Психологиялық кеңестер
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">1</span>
                Өзіңді басқалармен салыстырма. Әр оқушының өз қарқыны бар.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">2</span>
                Қателіктерден қорықпа — бұл оқу процесінің маңызды бөлігі.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">3</span>
                Жаңа достар табуға ашық бол, сынып іс-шараларына белсенді қатыс.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-1">4</span>
                Демалыс пен хоббиді ұмытпа, миды тынықтыру маңызды.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adaptation;