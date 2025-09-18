import React from 'react';

interface TaskItemProps {
  time: string;
  description: string;
  category: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ time, description, category }) => {
  return (
    <div className="flex flex-col md:flex-row mb-4 p-4 rounded-xl bg-white/70 backdrop-blur-md border-l-4 border-indigo-300 hover:bg-white/80 transition-all shadow-lg hover:shadow-indigo-400/30 hover:translate-x-1 duration-300">
      <div className="font-bold text-indigo-700 min-w-[120px] text-sm md:text-base flex items-center">
        <span className="bg-indigo-100 px-3 py-1 rounded-lg">{time}</span>
      </div>
      <div className="flex-1 text-slate-800 mt-2 md:mt-0 flex flex-col md:flex-row md:items-center justify-between">
        <span className="font-medium">{description}</span>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 md:mt-0 md:ml-2 shadow-inner
          ${category === 'Exercise' ? 'bg-gradient-to-r from-green-400 to-green-300 text-green-900' : 
          category === 'Study' ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-blue-900' : 
          category === 'Meal' ? 'bg-gradient-to-r from-orange-400 to-orange-300 text-orange-900' : 
          category === 'Coding' ? 'bg-gradient-to-r from-purple-400 to-purple-300 text-purple-900' : 
          category === 'Leisure' ? 'bg-gradient-to-r from-pink-400 to-pink-300 text-pink-900' : 
          category === 'Rest' ? 'bg-gradient-to-r from-teal-400 to-teal-300 text-teal-900' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'}`}>
          {category}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;