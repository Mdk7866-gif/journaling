import React from 'react';

interface TaskItemProps {
  time: string;
  description: string;
  category: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ time, description, category }) => {
  return (
    <div className="flex flex-col md:flex-row mb-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border-l-4 border-indigo-400 hover:bg-white/15 transition-all shadow-lg hover:shadow-indigo-500/20 hover:translate-x-1 duration-300">
      <div className="font-bold text-indigo-300 min-w-[120px] text-sm md:text-base flex items-center">
        <span className="bg-indigo-500/20 px-3 py-1 rounded-lg">{time}</span>
      </div>
      <div className="flex-1 text-white mt-2 md:mt-0 flex flex-col md:flex-row md:items-center justify-between">
        <span className="font-medium">{description}</span>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 md:mt-0 md:ml-2 shadow-inner
          ${category === 'Exercise' ? 'bg-gradient-to-r from-green-600 to-green-400 text-white' : 
          category === 'Study' ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white' : 
          category === 'Meal' ? 'bg-gradient-to-r from-orange-600 to-orange-400 text-white' : 
          category === 'Coding' ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white' : 
          category === 'Leisure' ? 'bg-gradient-to-r from-pink-600 to-pink-400 text-white' : 
          category === 'Rest' ? 'bg-gradient-to-r from-teal-600 to-teal-400 text-white' : 'bg-gradient-to-r from-gray-600 to-gray-400 text-white'}`}>
          {category}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;