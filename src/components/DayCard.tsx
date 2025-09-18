import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  time: string;
  description: string;
  category: string;
}

interface DayCardProps {
  title: string;
  emoji: string;
  tasks: Task[];
  isActive: boolean;
  children?: React.ReactNode; // Added optional children prop
}

const DayCard: React.FC<DayCardProps> = ({ title, emoji, tasks, isActive, children }) => {
  if (!isActive) return null;
  
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-indigo-200 transition-all animate-fade-in-down">
      <div className="flex items-center gap-3 mb-8 border-b border-indigo-500/30 pb-4">
        <span className="text-4xl">{emoji}</span>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">{title}</h2>
      </div>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskItem 
            key={index}
            time={task.time}
            description={task.description}
            category={task.category}
          />
        ))}
      </div>
      {children} {/* Render children if provided */}
    </div>
  );
};

export default DayCard;