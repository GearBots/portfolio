import logo from './logo.svg';
import './App.css';
import NavLayout from './components/NavLayout';
import Home from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<NavLayout />}>
        <Route index element = {<Home />} />

      </Route>
    )
  )
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
