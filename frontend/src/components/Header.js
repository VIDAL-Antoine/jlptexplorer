import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ setJlptLevel }) => {
  return (
    <header className="bg-dark text-white px-5 py-3">
      <nav className="navbar navbar-dark">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/n5" className="nav-link" onClick={() => setJlptLevel('n5')}>N5</Link>
        <Link to="/n4" className="nav-link" onClick={() => setJlptLevel('n4')}>N4</Link>
        <Link to="/n3" className="nav-link" onClick={() => setJlptLevel('n3')}>N3</Link>
        <Link to="/n2" className="nav-link" onClick={() => setJlptLevel('n2')}>N2</Link>
        <Link to="/n1" className="nav-link" onClick={() => setJlptLevel('n1')}>N1</Link>
        <Link to="/nu" className="nav-link" onClick={() => setJlptLevel('nu')}>Unclassified</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
