import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = {
    marginRight: '2px', // Adjust the value according to your needs
};

const Header = ({ setJlptLevel }) => {
  return (
    <header className="bg-dark text-white py-3">
      <nav className="navbar navbar-dark">
        <Link to="/" style={linkStyle} className="nav-link ml-2 mr-3">Home</Link>
        <Link to="/n5" className="nav-link" onClick={() => setJlptLevel('n5')}>N5</Link>
        <Link to="/n4" className="nav-link" onClick={() => setJlptLevel('n4')}>N4</Link>
        <Link to="/n3" className="nav-link" onClick={() => setJlptLevel('n3')}>N3</Link>
        <Link to="/n2" className="nav-link" onClick={() => setJlptLevel('n2')}>N2</Link>
        <Link to="/n1" className="nav-link" onClick={() => setJlptLevel('n1')}>N1</Link>
        <Link to="/other" className="nav-link">Other</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
        <Link to="/contact" className="nav-link ml-2">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
