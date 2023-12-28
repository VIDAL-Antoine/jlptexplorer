import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="primary" dark expand="md">
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="d-flex justify-content-between w-100 mx-5" navbar>
          <NavItem><Link to="/" className="nav-link"><i className="bi bi-house-fill"></i></Link></NavItem>
          <NavItem><Link to="/n5" className="nav-link" >N5</Link></NavItem>
          <NavItem><Link to="/n4" className="nav-link" >N4</Link></NavItem>
          <NavItem><Link to="/n3" className="nav-link" >N3</Link></NavItem>
          <NavItem><Link to="/n2" className="nav-link" >N2</Link></NavItem>
          <NavItem><Link to="/n1" className="nav-link" >N1</Link></NavItem>
          {/* <NavItem><Link to="/nu" className="nav-link" >Unclassified</Link></NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
