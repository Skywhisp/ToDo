import { fireEvent, render, screen } from '@testing-library/react';
import { taskStore } from '../stores/taskStore.ts';
import TaskInput from '../components/TaskInput';

describe('TaskInput', () => {
  it('adds a task', () => {
    render(<TaskInput />);

    const input = screen.getByPlaceholderText('Add a task...');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(taskStore.tasks.length).toBe(1);
    expect(taskStore.tasks[0].text).toBe('New Task');
    expect(input).toHaveValue('');
  });

  it('disables Add button for empty input', () => {
    render(<TaskInput />);

    const addButton = screen.getByText('Add');
    expect(addButton).toBeDisabled();

    const input = screen.getByPlaceholderText('Add a task...');
    fireEvent.change(input, { target: { value: 'Valid Task' } });
    expect(addButton).not.toBeDisabled();
  });
});
