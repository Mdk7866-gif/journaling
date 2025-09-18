import DayCard from '@/components/DayCard';

export default function Saturday() {
  const saturdayTasks = [
    { time: '6:45 – 7:30', description: 'Morning exercise', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 9:00', description: '2 Codeforces problems', category: 'Coding' },
    { time: '9:00 – 11:00', description: 'Weekend college work', category: 'Study' },
    { time: '11:00 – 1:00', description: 'Web development', category: 'Coding' },
    { time: '1:00 – 2:30', description: 'Lunch + power nap', category: 'Meal' },
    { time: '2:30 – 4:30', description: 'Web development', category: 'Coding' },
    { time: '5:00 – 6:30', description: 'Exercise + shower + relax', category: 'Exercise' },
    { time: '6:30 – 7:30', description: 'Web development', category: 'Coding' },
    { time: '7:30 – 8:30', description: 'Dinner', category: 'Meal' },
    { time: '8:30 – 9:30', description: 'Web development', category: 'Coding' },
    { time: '9:30 – 10:00', description: 'Journaling + relax', category: 'Relax' },
    { time: '10:00 – 6:45', description: 'Sleep', category: 'Rest' },
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