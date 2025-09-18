import DayCard from '@/components/DayCard';

export default function Friday() {
  const fridayTasks = [
    { time: '6:45 – 7:30', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 1:00', description: 'College classes', category: 'Study' },
    { time: '1:00 – 2:30', description: 'Lunch + power nap + relax', category: 'Meal' },
    { time: '2:30 – 5:30', description: 'College classes/study', category: 'Study' },
    { time: '5:30 – 7:00', description: 'Exercise + shower + hydration', category: 'Exercise' },
    { time: '7:00 – 8:00', description: 'Dinner + relax', category: 'Meal' },
    { time: '8:00 – 11:00', description: 'Movie night', category: 'Leisure' },
    { time: '11:00 – 7:00', description: 'Sleep', category: 'Rest' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Friday"
        emoji="🎬"
        tasks={fridayTasks}
        isActive={true}
      />
    </div>
  );
}