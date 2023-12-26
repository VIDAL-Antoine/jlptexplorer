import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
      <footer style={{backgroundColor: '#3699ff', position: 'fixed', width: '100%', bottom: '0'}}>
        <div className="py-3">
          <p className="mb-0 text-center text-white">{new Date().getFullYear()} JLPTExplorer</p>
        </div>
      </footer>
  );
};

export default Footer;
