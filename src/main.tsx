import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoPage from './pages/TodoPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>
);
