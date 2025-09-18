import DayCard from '@/components/DayCard';

export default function Home() {
  const mondayTasks = [
    { time: '6:45 – 7:30', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 9:00', description: 'College class', category: 'Study' },
    { time: '9:30 – 12:00', description: 'Data Science learning', category: 'Study' },
    { time: '12:00 – 1:00', description: 'Lunch + power nap', category: 'Meal' },
    { time: '1:00 – 5:00', description: 'College classes', category: 'Study' },
    { time: '5:00 – 6:30', description: 'Exercise + shower + hydration + relax', category: 'Exercise' },
    { time: '6:30 – 7:30', description: '2 Codeforces problems', category: 'Coding' },
    { time: '7:30 – 8:30', description: 'Dinner + relax', category: 'Meal' },
    { time: '8:30 – 9:30', description: 'Web development projects', category: 'Coding' },
    { time: '9:30 – 10:00', description: 'Journaling + relax', category: 'Leisure' },
    { time: '10:00 – 6:45', description: 'Sleep', category: 'Rest' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Monday"
        emoji="🌟"
        tasks={mondayTasks}
        isActive={true}
      />
    </div>
  );
}
