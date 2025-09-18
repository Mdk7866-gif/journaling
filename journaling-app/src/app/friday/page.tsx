import DayCard from '@/components/DayCard';

export default function Friday() {
  const fridayTasks = [
    { time: '6:45 – 7:30', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 1:00', description: 'College classes', category: 'Study' },
    { time: '1:00 – 2:30', description: 'Lunch + power nap + relax', category: 'Meal' },
    { time: '2:30 – 4:30', description: 'College classes/study', category: 'Study' },
    { time: '5:00 – 5:10', description: 'Refresh (wash face, set up water/snacks, dim lights, good seating)', category: 'Leisure' },
    { time: '5:10 – 6:40', description: '**MOVIE** Movie - Part 1 (Watch the first half, Focused stretch without fatigue)', category: 'Leisure' },
    { time: '6:40 – 6:50', description: 'Break (Get up, stretch, walk around, hydrate, look outside (20-20-20 rule))', category: 'Break' },
    { time: '6:50 – 7:25', description: '**MOVIE** Movie - Part 2 (till pause point, Watch another chunk before dinner)', category: 'Leisure' },
    { time: '7:30 – 8:30', description: 'Dinner (screen-free, Proper digestion, brain reset)', category: 'Meal' },
    { time: '8:30 – 9:55', description: '**MOVIE** Movie - Part 3 (finish, You’ll be refreshed -> enjoy the climax without strain)', category: 'Leisure' },
    { time: '9:55 – 10:00', description: 'Cooldown (short walk, light music, or stretch before sleep)', category: 'Rest' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Friday"
        emoji="🎬"
        tasks={fridayTasks}
        isActive={true}
      >
        <div className="mt-4 p-4 border border-indigo-500/50 rounded-lg bg-indigo-900/70">
          <h2 className="text-xl font-bold mb-2 text-white bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Movie Enjoyment Time</h2>
          {fridayTasks
            .filter(task => task.description.startsWith('**MOVIE**'))
            .map((task, index) => (
              <div key={index} className="mb-2 p-2 bg-white/10 rounded-md">
                <strong className="text-indigo-300">{task.time}</strong>: {task.description.replace('**MOVIE** ', '')}
              </div>
            ))}
        </div>
      </DayCard>
    </div>
  );
}