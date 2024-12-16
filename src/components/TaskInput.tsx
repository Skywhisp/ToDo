import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../stores/taskStore';

const TaskInput = observer(() => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      taskStore.addTask(taskText.trim());
      setTaskText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Add a task..."
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        disabled={!taskText.trim()}
      >
        Add
      </Button>
    </Box>
  );
});

export default TaskInput;
