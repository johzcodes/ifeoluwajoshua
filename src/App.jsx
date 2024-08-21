import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
import Approach from './components/Approach';

function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <div className="flex justify-between mt-16">
        <NavLink 
          to="/about"
          className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
        >
          About-me
        </NavLink>
        <NavLink 
          to="/approach"
          className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
        >
        My Approach
        </NavLink>
        <NavLink 
          to="/projects"
          className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
        >
          Projects
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
export default App;
