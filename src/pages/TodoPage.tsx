import { Container, Typography } from '@mui/material';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Footer from '../components/Footer';

const TodoPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" mt={4}>
        ToDo List
      </Typography>
      <TaskInput />
      <TaskList />
      <Footer />
    </Container>
  );
};

export default TodoPage;
