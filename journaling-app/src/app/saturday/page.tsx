import DayCard from '@/components/DayCard';

export default function Saturday() {
  const saturdayTasks = [
    { time: '7:00 – 8:00', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '8:00 – 8:30', description: 'Breakfast', category: 'Meal' },
    { time: '8:30 – 12:30', description: 'Web development projects', category: 'Coding' },
    { time: '12:30 – 2:00', description: 'Lunch + power nap', category: 'Meal' },
    { time: '2:00 – 5:00', description: 'Data Science learning', category: 'Study' },
    { time: '5:00 – 6:30', description: 'Exercise + shower', category: 'Exercise' },
    { time: '6:30 – 8:00', description: 'Dinner + relax', category: 'Meal' },
    { time: '8:00 – 10:00', description: 'Coding practice/projects', category: 'Coding' },
    { time: '10:00 – 7:00', description: 'Sleep', category: 'Rest' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Saturday"
        emoji="💻"
        tasks={saturdayTasks}
        isActive={true}
      />
    </div>
  );
}