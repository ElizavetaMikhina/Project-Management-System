import App from '@/App';
import { Board, Boards, Issues } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'boards', element: <Boards /> },
      { path: 'issues', element: <Issues /> },
      { path: 'board/:id', element: <Board /> }
    ]
  }
]);

export { router };
