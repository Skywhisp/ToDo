import { Box } from '@mui/material';
import TaskCounter from './TaskCounter';
import TaskFilter from './TaskFilter';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = () => (
  <Box mt={2}>
    <TaskFilter />
    <Box display="flex" justifyContent="space-between" alignItems="center"
         mt={2}>
      <TaskCounter />
      <ClearCompletedButton />
    </Box>
  </Box>
);

export default Footer;
