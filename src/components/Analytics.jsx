import { useEffect, useState } from 'react';
import { BarChart, Activity } from 'lucide-react';

export default function Analytics() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStats(data.data);
        }
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-16 md:my-24 md:py-2">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 flex items-center justify-center gap-2">
          <Activity className="w-6 h-6" />
          Visitor Analytics
        </h2>

        <div className="glass-effect p-6 rounded-xl">
          {loading ? (
            <div className="text-center">Loading analytics...</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {stats.map(({ source, count, updatedAt }) => (
                <div key={source} className="p-4 rounded-lg bg-gray-100/50 dark:bg-gray-800/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">
                      {source}
                    </h3>
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary">{count}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Last visit: {new Date(updatedAt).toISOString().split('T')[0]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
