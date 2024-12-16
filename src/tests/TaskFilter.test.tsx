import { fireEvent, render, screen } from '@testing-library/react';
import { taskStore } from '../stores/taskStore.ts';
import TaskFilter from '../components/TaskFilter';

describe('TaskFilter', () => {
  it('renders filter buttons correctly', () => {
    render(<TaskFilter />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('updates filter on button click', () => {
    render(<TaskFilter />);

    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);
    expect(taskStore.filter).toBe('active');

    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);
    expect(taskStore.filter).toBe('completed');
  });
});
