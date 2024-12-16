import { render, screen, fireEvent } from '@testing-library/react';
import { taskStore } from '../stores/taskStore';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  it('displays tasks correctly', () => {
    taskStore.tasks = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];
    render(<TaskList />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('toggles task completion on checkbox click', () => {
    taskStore.tasks = [
      { id: '1', text: 'Task 1', completed: false },
    ];
    render(<TaskList />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(taskStore.tasks[0].completed).toBe(true);
  });
});
