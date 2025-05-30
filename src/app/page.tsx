'use client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from './inventory/page'; // Assuming CarSearch.tsx

//Home
// Dummy pages for now => after these dummy lines are deleted, code in folders should run
const Home = () => <div className="p-8 text-2xl">Welcome to CarZone!</div>;
const Inventory = () => <SearchBar />;
const Comparison = () => <div className="p-8 text-2xl">Comparison page coming soon!</div>;
const About = () => <div className="p-8 text-2xl">About CarZone</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
