import { createBrowserRouter } from 'react-router-dom';
import App from './presentation/app';
import { PageNotFound } from './presentation/pages/errors/not-found';
import { CoworkersList } from './presentation/pages/coworkers/coworkers-list';
import { TeamsList } from './presentation/pages/teams/teams-list';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <CoworkersList />,
      },
      {
        path: 'teams',
        element: <TeamsList />,
      },
      {
        path: 'coworkers',
        element: <CoworkersList />,
      },
    ],
  },
]);
