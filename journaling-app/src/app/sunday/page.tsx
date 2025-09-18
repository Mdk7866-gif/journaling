import DayCard from '@/components/DayCard';

export default function Sunday() {
  const sundayTasks = [
    { time: '6:45 – 7:30', description: 'Morning exercise', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 1:00', description: 'Hakirat project work', category: 'Coding' },
    { time: '1:00 – 2:30', description: 'Lunch + power nap', category: 'Meal' },
    { time: '2:30 – 4:30', description: 'Hakirat project work (continue)', category: 'Coding' },
    { time: '5:00 – 6:30', description: 'Exercise + relax', category: 'Exercise' },
    { time: '6:30 – 7:00', description: 'Free/relax', category: 'Relax' },
    { time: '7:00 – 8:00', description: 'Dinner', category: 'Meal' },
    { time: '8:00 – 10:00', description: 'Codeforces contest+journaling', category: 'Coding' },
    { time: '10:00 – 6:45', description: 'Sleep', category: 'Rest' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Sunday"
        emoji="🚀"
        tasks={sundayTasks}
        isActive={true}
      />
    </div>
  );
}