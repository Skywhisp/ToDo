import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { taskStore } from '../stores/taskStore';

const TaskCounter = observer(() => (
  <Typography>
    {taskStore.tasks.length} tasks in total ({taskStore.activeTasks.length} active)
  </Typography>
));

export default TaskCounter;
