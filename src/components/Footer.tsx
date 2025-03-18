import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          All rights reserved © {new Date().getFullYear()} Sauham Vyas
        </p>
      </div>
    </footer>
  );
};

export default Footer;