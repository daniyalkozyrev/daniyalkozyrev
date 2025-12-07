import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { NEWS_ITEMS, SCHEDULE_DATA } from '../constants';

const InfoBlock: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fizmat-blue sm:text-4xl">Мектеп өмірі мен жетістіктері</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            РФМШ — дарынды балаларға арналған білім ордасы. Мұнда ғылым мен білім, спорт пен шығармашылық қатар дамиды.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-fizmat-red uppercase tracking-wider">{news.category}</span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {news.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{news.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-inner">
          <div className="flex items-center mb-6">
            <Clock className="text-fizmat-blue mr-3" />
            <h3 className="text-xl font-bold text-fizmat-blue">7-сынып сабақ кестесінің үлгісі</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
              <thead className="bg-fizmat-blue text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Уақыт</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Пән</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Кабинет</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SCHEDULE_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{row.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                        <MapPin size={14} className="mr-1 text-gray-400" /> {row.room}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoBlock;