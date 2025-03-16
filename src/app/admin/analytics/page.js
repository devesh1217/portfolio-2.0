'use client';
import { useEffect, useState } from 'react';

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics/summary');
      const data = await response.json();
      
      if (data.success) {
        setAnalytics(data.data);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Visitor Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analytics.map((item) => (
          <div key={item.source} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold capitalize">{item.source}</h2>
            <p className="text-3xl font-bold my-2">{item.count}</p>
            <p className="text-sm text-gray-500">
              Last visit: {new Date(item.lastVisit).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
