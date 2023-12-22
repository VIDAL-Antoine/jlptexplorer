import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Header = ({ setJlptLevel }) => {
  return (
    <Navbar color="primary" dark expand="md">
       <Nav className="d-flex justify-content-between w-100 mx-5" navbar>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/n5" className="nav-link" onClick={() => setJlptLevel('n5')}>N5</Link></NavItem>
          <NavItem><Link to="/n4" className="nav-link" onClick={() => setJlptLevel('n4')}>N4</Link></NavItem>
          <NavItem><Link to="/n3" className="nav-link" onClick={() => setJlptLevel('n3')}>N3</Link></NavItem>
          <NavItem><Link to="/n2" className="nav-link" onClick={() => setJlptLevel('n2')}>N2</Link></NavItem>
          <NavItem><Link to="/n1" className="nav-link" onClick={() => setJlptLevel('n1')}>N1</Link></NavItem>
          <NavItem><Link to="/nu" className="nav-link" onClick={() => setJlptLevel('nu')}>Unclassified</Link></NavItem>
          <NavItem><Link to="/contact" className="nav-link">Contact</Link></NavItem>
        </Nav>
    </Navbar>
  );
};

export default Header;
