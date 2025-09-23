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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJournals = async (pageNum = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/journals?page=${pageNum}&limit=10`);
      if (!response.ok) throw new Error('Failed to fetch journals');
      const data = await response.json();

      if (pageNum === 1) {
        setJournals(data.journals);
      } else {
        setJournals((prev) => [...prev, ...data.journals]);
      }

      setHasMore(pageNum < data.pages);
    } catch (err) {
      setError('Failed to load journal entries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals(1);
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

      // Refresh journals after submission (reload first page)
      setPage(1);
      fetchJournals(1);
    } catch (err) {
      setError('Failed to save journal entry');
      console.error(err);
      throw err;
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJournals(nextPage);
  };

  return (
    <div className="min-h-screen">
      <JournalForm onSubmit={handleSubmit} />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Your Journal Entries</h2>

        {loading && journals.length === 0 ? (
          <div className="text-center py-8 text-white/70">Loading journal entries...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-400">{error}</div>
        ) : journals.length === 0 ? (
          <div className="text-center py-8 text-white/70">No journal entries yet. Start writing today!</div>
        ) : (
          <>
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

            {hasMore && !loading && (
              <div className="text-center mt-6">
                <button
                  onClick={loadMore}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
