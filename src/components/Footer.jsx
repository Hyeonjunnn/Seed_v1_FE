import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Seed Board. All rights reserved.
    </footer>
  );
};

export default Footer;