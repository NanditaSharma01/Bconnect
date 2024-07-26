// Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dropdown = ({ iconSrc, altText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown">
        <img src={iconSrc} alt={altText} className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Help
            </Link>
            <Link to="/training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Training
            </Link>
            <Link to="/terms-of-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Privacy Policy
            </Link>
            <Link to="/term-summary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Term Summary
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
