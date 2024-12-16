import { makeAutoObservable } from 'mobx';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

class TaskStore {
  tasks: Task[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter = filter;
  }

  get filteredTasks() {
    switch (this.filter) {
      case 'active':
        return this.activeTasks;
      case 'completed':
        return this.completedTasks;
      default:
        return this.tasks;
    }
  }

  addTask(text: string) {
    this.tasks.push({ id: crypto.randomUUID(), text, completed: false });
  }

  toggleTask(id: string) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) task.completed = !task.completed;
  }

  clearCompleted() {
    this.tasks = this.tasks.filter((task) => !task.completed);
  }

  get activeTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
}

export const taskStore = new TaskStore();
