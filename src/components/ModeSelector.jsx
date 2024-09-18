import React, { useEffect, useState } from 'react';
import { CgDarkMode } from "react-icons/cg";

const ModeSelector = () => {
  const [theme, setTheme] = useState('light');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const selectMode = (mode) => {
    console.log(`selected ${mode}`);
    setTheme(mode);
    handleToggle(false);
  };

  return (
    <div className='h-screen bg-white dark:bg-black dark:text-white text-end'>
      <div className='relative inline-block'>
        <button onClick={handleToggle}>
          <CgDarkMode size='25px' color='#E9A530'/>
        </button>

        {showDropdown && (
          <div 
            className='bg-[#E9A530] w-[150px] py-5 text-center rounded-lg absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10'>
            <button onClick={() => selectMode('system')} className='block px-4 py-2 text-black'>System</button>
            <button onClick={() => selectMode('light')} className='block px-4 py-2 text-black'>Light</button>
            <button onClick={() => selectMode('dark')} className='block px-4 py-2 text-black'>Dark</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModeSelector;
