import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor: '#3699ff'}} className="mt-5">
        <div className="container py-3">
          <p className="mb-0 text-center text-white">{new Date().getFullYear()} Game GramExplorer</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
