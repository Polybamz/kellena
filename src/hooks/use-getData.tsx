import { useState, useEffect } from 'react';
import { streamEvents, streamImpactStories, streamPrograms } from '../../firebase';

const useGetData = () => {
  const [events, setEvents] = useState([]);
  const [impactStories, setImpactStories] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsubscribeEvents = streamEvents(data => setEvents(data));
        const unsubscribeImpactStories = streamImpactStories(data => setImpactStories(data));
        const unsubscribePrograms = streamPrograms(data => setPrograms(data));
        return () => {
          unsubscribeEvents();
          unsubscribeImpactStories();
          unsubscribePrograms();
        };
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return { events, impactStories, programs, loading, error };
};

export default useGetData;