import React, { useState } from 'react';

interface JournalFormProps {
  onSubmit: (content: string, mood: string) => Promise<void>;
}

const JournalForm: React.FC<JournalFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('neutral');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(content, mood);
      setContent('');
      setMood('neutral');
    } catch (error) {
      console.error('Error submitting journal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-gray-700 mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Write Today's Journal</h2>
      
      <div className="mb-4">
        <label htmlFor="mood" className="block text-white mb-2">How are you feeling today?</label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="happy">Happy 😊</option>
          <option value="productive">Productive 💪</option>
          <option value="neutral">Neutral 😐</option>
          <option value="tired">Tired 😴</option>
          <option value="sad">Sad 😔</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="content" className="block text-white mb-2">Journal Entry</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
          placeholder="Write your thoughts for today..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || !content.trim()}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Journal Entry'}
      </button>
    </form>
  );
};

export default JournalForm;