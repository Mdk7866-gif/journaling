import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface JournalEntryProps {
  id: string;
  content: string;
  mood: string;
  date: string;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ content, mood, date }) => {
  const formattedDate = new Date(date);
  const timeAgo = formatDistanceToNow(formattedDate, { addSuffix: true });
  
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'productive': return '💪';
      case 'neutral': return '😐';
      case 'tired': return '😴';
      case 'sad': return '😔';
      default: return '📝';
    }
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-gray-700 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{getMoodEmoji(mood)}</span>
          <span className="text-white/70 text-sm">{timeAgo}</span>
        </div>
        <div className="text-white/50 text-sm">
          {formattedDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
      </div>
      <p className="text-white whitespace-pre-wrap">{content}</p>
    </div>
  );
};

export default JournalEntry;