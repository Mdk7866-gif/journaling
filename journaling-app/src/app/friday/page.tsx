import DayCard from '@/components/DayCard';

export default function Friday() {
  const fridayTasks = [
    { time: '6:45 – 7:30', description: 'Sunlight + brisk walk/jog + stretch + breathing', category: 'Exercise' },
    { time: '7:30 – 8:00', description: 'Breakfast (3 eggs, 7 almonds, 1 date, little mess food)', category: 'Meal' },
    { time: '8:00 – 1:00', description: 'College classes', category: 'Study' },
    { time: '1:00 – 2:30', description: 'Lunch + power nap + relax', category: 'Meal' },
    { time: '2:30 – 4:30', description: 'College classes/study', category: 'Study' },
    { time: '4:30 – 10:00', description: 'Movie+ryans dinner+journaling', category: 'Leisure' },
    { time: '5:00 – 5:10', description: 'Refresh (wash face, set up water/snacks, dim lights, good seating)', category: 'Leisure' },
    { time: '5:10 – 6:40', description: '**MOVIE** Movie - Part 1 (Watch the first half, Focused stretch without fatigue)', category: 'Leisure' },
    { time: '6:40 – 6:50', description: 'Break (Get up, stretch, walk around, hydrate, look outside (20-20-20 rule))', category: 'Break' },
    { time: '6:50 – 7:25', description: '**MOVIE** Movie - Part 2 (till pause point, Watch another chunk before dinner)', category: 'Leisure' },
    { time: '7:30 – 8:30', description: 'Dinner (screen-free, Proper digestion, brain reset)', category: 'Meal' },
    { time: '8:30 – 9:55', description: '**MOVIE** Movie - Part 3 (finish, You’ll be refreshed -> enjoy the climax without strain)', category: 'Leisure' },
    { time: '9:55 – 10:00', description: 'Cooldown (short walk, light music, or stretch before sleep)', category: 'Rest' },
  ];

  const movieSchedule = [
    { date: '19 Sept 2025 (Fri)', movie: 'Ittefaq (2001)' },
    { date: '26 Sept 2025 (Fri)', movie: 'Yes Boss (1997)' },
    { date: '3 Oct 2025 (Fri)', movie: 'Hum Hain Rahi Pyar Ke (1993)' },
    { date: '10 Oct 2025 (Fri)', movie: 'Dil (1990)' },
    { date: '17 Oct 2025 (Fri)', movie: 'Jaane Bhi Do Yaaro (1983)' },
    { date: '24 Oct 2025 (Fri)', movie: 'Angoor (1982)' },
    { date: '31 Oct 2025 (Fri)', movie: 'Chashme Buddoor (1981)' },
    { date: '7 Nov 2025 (Fri)', movie: 'Khubsurat (1980)' },
    { date: '14 Nov 2025 (Fri)', movie: 'Gol Maal (1979)' },
    { date: '21 Nov 2025 (Fri)', movie: 'Baton Baton Mein (1979)' },
    { date: '28 Nov 2025 (Fri)', movie: 'Khatta Meetha (1978)' },
    { date: '5 Dec 2025 (Fri)', movie: 'Pati, Patni Aur Woh (1978)' },
    { date: '12 Dec 2025 (Fri)', movie: 'Bobby (1973)' },
    { date: '19 Dec 2025 (Fri)', movie: 'Ittefaq (1969)' },
  ];

  return (
    <div className="min-h-screen">
      <DayCard 
        title="Friday"
        emoji="🎬"
        tasks={fridayTasks.filter(task => {
          const startTime = parseInt(task.time.split(' – ')[0].replace(':', ''), 10);
          return startTime < 500; // Filter tasks before 5:00 PM
        })}
        isActive={true}
      >
        <div className="mt-4 p-4 border border-indigo-500/50 rounded-lg bg-indigo-900/70">
          <h2 className="text-xl font-bold mb-2 text-white bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Movie Enjoyment Time</h2>
          {fridayTasks
            .filter(task => 
              task.time === '5:00 – 5:10' || 
              task.description.startsWith('**MOVIE**') || 
              task.time === '6:40 – 6:50' || 
              task.time === '7:30 – 8:30' || 
              task.time === '9:55 – 10:00'
            )
            .map((task, index) => (
              <div key={index} className="mb-2 p-2 bg-white/10 rounded-md">
                <strong className="text-indigo-300">{task.time}</strong>: {task.description.replace('**MOVIE** ', '')}
              </div>
            ))}
        </div>
        <div className="mt-4 p-4 border border-purple-500/50 rounded-lg bg-purple-900/70">
          <h3 className="text-lg font-semibold mb-3 text-white bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent flex items-center">
            <span className="mr-2">🎥</span>
            Mujahid's Friday Classic Movie Plan (Sept-Dec 2025)
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            {movieSchedule.map((item, index) => (
              <li key={index} className="flex justify-between p-2 bg-white/5 rounded-md border-l-4 border-purple-400">
                <span className="font-medium text-purple-300">{item.date}</span>
                <span className="text-white italic">– {item.movie}</span>
              </li>
            ))}
          </ul>
        </div>
      </DayCard>
    </div>
  );
}