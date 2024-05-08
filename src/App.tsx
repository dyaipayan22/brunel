import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import RegistrationPage from './pages/registration';
import SuccessPage from './pages/success';
import Layout from './components/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
      {
        path: '/success',
        element: <SuccessPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
