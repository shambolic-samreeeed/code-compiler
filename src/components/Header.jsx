import React from 'react';
import { FaJsfiddle } from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";
import { LuLayoutPanelLeft } from "react-icons/lu";
import CodeEditor from './CodeEditor';
import ModeSelector from './ModeSelector';

const Header = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='flex justify-between pl-10 pr-10'>
        <FaJsfiddle size='60px' color='#E9A530' />

        <div className='flex mt-5 space-x-10'>
          <LuLayoutPanelLeft size='25px' color='#E9A530'/>
          <ModeSelector />
          <RxSwitch size='25px' color='#E9A530' />
        </div>
      </div>

      
    </div>
  );
};

export default Header;
