
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import { Watcher } from './pages/Watcher.tsx';
import './index.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Watcher />} />,
  )
);