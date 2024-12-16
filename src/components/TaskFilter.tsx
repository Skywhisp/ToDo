import { observer } from 'mobx-react-lite';
import { Button, Box } from '@mui/material';
import { taskStore } from '../stores/taskStore';

const TaskFilter = observer(() => {
  const filters: { label: string; value: 'all' | 'active' | 'completed' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' }
  ];

  return (
    <Box display="flex" justifyContent="center" gap={2} mt={2}>
      {filters.map(({ label, value }) => (
        <Button
          key={value}
          variant={taskStore.filter === value ? 'contained' : 'outlined'}
          onClick={() => taskStore.setFilter(value)}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
});

export default TaskFilter;
