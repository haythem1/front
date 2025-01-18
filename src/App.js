
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => setSearchTerm(term);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gestion des Événements</h1>
      <div className="mb-4">

      <SearchBar onSearch={handleSearch} />

      </div>
      <div className="mb-4">
        <EventForm setEvents={setEvents} />
      </div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default App;
