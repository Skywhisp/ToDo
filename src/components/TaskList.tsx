import { observer } from 'mobx-react-lite';
import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { taskStore } from '../stores/taskStore';

const TaskList = observer(() => {
  const tasksToDisplay = taskStore.filteredTasks;

  return (
    <List>
      {tasksToDisplay.map((task) => (
        <ListItem key={task.id} disableGutters>
          <Checkbox
            checked={task.completed}
            onChange={() => taskStore.toggleTask(task.id)}
          />
          <ListItemText
            primary={task.text}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'inherit'
            }}
          />
        </ListItem>
      ))}
    </List>
  );
});

export default TaskList;
