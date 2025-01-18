import { useEffect } from 'react';
import axios from 'axios';

function useFetchEvents(setEvents) {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [setEvents]);
}

export default useFetchEvents;
