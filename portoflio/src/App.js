import logo from './logo.svg';
import './App.css';
import NavLayout from './components/NavLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<NavLayout />}>
        <Route index element = {<Home />} />
        <Route path = "/about" element = {<About />}/>
        <Route path = "/skills" element = {<Skills />}/>
        <Route path = "/projects" element = {<Projects />}/>

      </Route>
    )
  )
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
