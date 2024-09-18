import React from 'react'
import { FaJsfiddle } from "react-icons/fa";

import ModeSelector from './ModeSelector';

const Header = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <div className=' flex justify-between pl-10 pr-10'>
            <FaJsfiddle size='60px' color='#E9A530' />
            <ModeSelector/>
      </div>
    </div>
  )
}

export default Header
