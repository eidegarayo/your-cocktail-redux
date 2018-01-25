import React from 'react'
import Bar from 'react-icons/lib/io/android-bar'

import './Header.css'

const Header = () =>
  <header className='pt-3 pb-4 text-center'>
    <p className='mb-0'>
      <Bar className='text-warning' size={30} />
      <Bar className='text-warning' size={30} />
      <Bar className='text-warning' size={30} />
    </p>
    <p className='pb-0'>YOUR BEST MOMENTS</p>
    <h1>YOUR COCKTAIL</h1>
  </header>

export default Header
