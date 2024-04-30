import logo from './logo.svg';
import './App.css';
import NavLayout from './components/NavLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<NavLayout />}>
        <Route index element = {<Home />} />
        <Route path = "/about" element = {<About />}/>

      </Route>
    )
  )
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
