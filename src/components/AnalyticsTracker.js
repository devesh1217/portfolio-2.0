'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function AnalyticsTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackVisit = async (source) => {
      try {
        await axios.post('/api/analytics', { source });
      } catch (error) {
        console.error('Error tracking visit:', error);
      } finally {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    const source = searchParams.get('utm_source') || 'direct';
    trackVisit(source);
  }, [searchParams]);

  return null;
}
