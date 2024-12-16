import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { taskStore } from '../stores/taskStore';

const ClearCompletedButton = observer(() => (
  <Button
    variant="text"
    onClick={() => taskStore.clearCompleted()}
    disabled={taskStore.completedTasks.length === 0}
  >
    Clear Completed
  </Button>
));

export default ClearCompletedButton;
