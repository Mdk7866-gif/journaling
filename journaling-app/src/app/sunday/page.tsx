import DayCard from '@/components/DayCard';

export default function Sunday() {
  const sundayTasks = [
    { time: '7:30 – 8:30', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '8:30 – 9:00', description: 'Breakfast', category: 'Meal' },
    { time: '9:00 – 12:00', description: 'Personal projects/learning', category: 'Study' },
    { time: '12:00 – 1:30', description: 'Lunch + relax', category: 'Meal' },
    { time: '1:30 – 4:30', description: 'Weekly planning + review', category: 'Study' },
    { time: '4:30 – 6:00', description: 'Exercise + shower', category: 'Exercise' },
    { time: '6:00 – 7:30', description: 'Dinner + relax', category: 'Meal' },
    { time: '7:30 – 9:30', description: 'Journaling + reflection', category: 'Leisure' },
    { time: '9:30 – 7:30', description: 'Sleep', category: 'Rest' },
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