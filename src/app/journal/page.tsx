'use client';

import { useState, useEffect } from 'react';
import JournalForm from '@/components/JournalForm';
import JournalEntry from '@/components/JournalEntry';

interface Journal {
  _id: string;
  content: string;
  mood: string;
  date: string;
  createdAt: string;
}

export default function JournalPage() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJournals = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/journals');
      if (!response.ok) throw new Error('Failed to fetch journals');
      const data = await response.json();
      setJournals(data);
    } catch (err) {
      setError('Failed to load journal entries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const handleSubmit = async (content: string, mood: string) => {
    try {
      const response = await fetch('/api/journals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, mood }),
      });

      if (!response.ok) throw new Error('Failed to create journal entry');
      
      // Refresh journals after submission
      fetchJournals();
    } catch (err) {
      setError('Failed to save journal entry');
      console.error(err);
      throw err;
    }
  };

  return (
    <div className="min-h-screen">
      <JournalForm onSubmit={handleSubmit} />
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Your Journal Entries</h2>
        
        {loading ? (
          <div className="text-center py-8 text-white/70">Loading journal entries...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-400">{error}</div>
        ) : journals.length === 0 ? (
          <div className="text-center py-8 text-white/70">No journal entries yet. Start writing today!</div>
        ) : (
          <div className="space-y-4">
            {journals.map((journal) => (
              <JournalEntry
                key={journal._id}
                id={journal._id}
                content={journal.content}
                mood={journal.mood}
                date={journal.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}