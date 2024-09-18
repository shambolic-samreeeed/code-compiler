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
    console.log(`selected ${mode}`)
    setTheme(mode);
    handleToggle(false)
  };

  return (
    <div className=' h-screen bg-white dark:bg-black dark:text-white text-center'>
      <button onClick={handleToggle} className='mt-3'><CgDarkMode size='25px'/></button>

      {showDropdown && (
        <div className='bg-red-500 pl-10 pr-10 pt-5 pb-5 '>
        <button onClick={() => selectMode('light')} className='ml-5 mr-5 text-center '>System</button> 
          <button onClick={() => selectMode('light')} className='ml-5 mr-5 text-center  '>Light</button> 
          <button onClick={() => selectMode('dark')} className='ml-5 mr-5 text-center ' >Dark</button>  
        </div>
      )}
    </div>
  );
};

export default ModeSelector;
