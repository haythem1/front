import React from 'react';
import { render, screen } from '@testing-library/react';
import EventList from '../src/components/EventList';

describe('EventList Component', () => {
  test('affiche un tableau avec des événements', () => {
    const mockEvents = [
      { id: '1', title: 'Événement 1', description: 'Description 1', date: '2025-01-18', category: 'Catégorie 1' },
      { id: '2', title: 'Événement 2', description: 'Description 2', date: '2025-01-19', category: 'Catégorie 2' },
    ];

    // Rendre le composant
    render(<EventList events={mockEvents} />);

    // Vérifications
    expect(screen.getByText('Événement 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('2025-01-18')).toBeInTheDocument();
    expect(screen.getByText('Catégorie 1')).toBeInTheDocument();

    expect(screen.getByText('Événement 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('2025-01-19')).toBeInTheDocument();
    expect(screen.getByText('Catégorie 2')).toBeInTheDocument();
  });

  test('affiche un message lorsqu\'aucun événement n\'est fourni', () => {
    // Rendre le composant avec une liste vide
    render(<EventList events={[]} />);

    // Vérification qu'aucune ligne n'est présente dans le tableau
    expect(screen.queryByText(/Événement/i)).not.toBeInTheDocument();
  });
});
