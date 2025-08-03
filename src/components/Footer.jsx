import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 py-6 text-center text-green-100 text-sm">
      © {new Date().getFullYear()} Seed Board. All rights reserved.
    </footer>
  );
};

export default Footer;