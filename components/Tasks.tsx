import React, { useState } from 'react';
import { Lightbulb, HelpCircle } from 'lucide-react';
import { TASKS } from '../constants';
import { TaskItem } from '../types';

interface TaskCardProps {
  task: TaskItem;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h4 className="font-bold text-fizmat-blue text-sm uppercase tracking-wide">{task.topic}</h4>
        <HelpCircle size={18} className="text-gray-400" />
      </div>
      <div className="p-6">
        <p className="text-gray-800 text-lg font-medium mb-6">
          {task.question}
        </p>
        
        <button
          onClick={() => setShowHint(!showHint)}
          className={`flex items-center justify-center w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            showHint 
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
              : 'bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100'
          }`}
        >
          <Lightbulb size={16} className={`mr-2 ${showHint ? 'text-gray-500' : 'text-yellow-500'}`} />
          {showHint ? 'Жасыру' : 'Подсказка'}
        </button>

        {showHint && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-lg animate-fade-in">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold text-yellow-800 block mb-1">Түсіндірме:</span>
              {task.hint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Tasks: React.FC = () => {
  return (
    <section id="tasks" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fizmat-blue">Дайындық есептері және «Подсказка»</h2>
          <p className="mt-2 text-gray-500">
            Өзіңді тексер! Есепті шығарып көр, қиналсаң көмек сұра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TASKS.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;