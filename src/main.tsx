import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from './context/AuthContext.tsx';
import { Watcher } from './pages/Watcher.tsx';
import { Login } from './pages/Login.tsx';
import { ProtectedRoute } from './components/organisms/ProtectedRoute.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Watcher />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
