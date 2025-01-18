import React, { useState } from 'react';
import axios from 'axios';

function EventForm({ setEvents }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    category: '',
  });

//handleChange changer etat de l'input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date) {
      alert('titre  et date sont obligatoire');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/events', formData);
      setEvents((prev) => [...prev, response.data]);
      setFormData({ title: '', description: '', date: '', category: '' });
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Catégorie</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Ajout événement</button>
    </form>
  );
}

export default EventForm;
