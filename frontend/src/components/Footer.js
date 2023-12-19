import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <p className="mb-0 text-center">{new Date().getFullYear()} Game GramExplorer</p>
      </div>
    </footer>
  );
};

export default Footer;
