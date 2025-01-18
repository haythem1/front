import React from 'react';
import { render, screen } from '@testing-library/react';
import EventList from '../src/components/EventList';

describe('EventList Component', () => {
  test('renders a table with events', () => {
    // Mock des événements
    const mockEvents = [
      { id: '1', title: 'Event 1', description: 'Description 1', date: '2025-01-18', category: 'Category 1' },
      { id: '2', title: 'Event 2', description: 'Description 2', date: '2025-01-19', category: 'Category 2' },
    ];

    // Rendre le composant
    render(<EventList events={mockEvents} />);

    // Vérifications
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('2025-01-18')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();

    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('2025-01-19')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  test('displays a message when no events are provided', () => {
    // Rendre le composant avec une liste vide
    render(<EventList events={[]} />);

    // Vérification qu'aucune ligne n'est présente dans le tableau
    expect(screen.queryByText(/Event/i)).not.toBeInTheDocument();
  });

  test('renders pagination controls correctly', () => {
    const mockEvents = Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Event ${i + 1}`,
      description: `Description ${i + 1}`,
      date: `2025-01-${18 + i}`,
      category: `Category ${i + 1}`,
    }));

    // Rendre le composant avec plusieurs événements
    render(<EventList events={mockEvents} />);

    // Vérification des numéros de page
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    // Vérification des boutons de navigation
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
