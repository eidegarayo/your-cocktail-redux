import React from 'react'
import Github from 'react-icons/lib/io/social-github'
import './Footer.css'

const Footer = () =>
  <footer className='text-center pt-2 pb-3'>
    <a href='https://github.com/eidegarayo/your-cocktail' target='_blank' rel='noopener noreferrer'>
      <Github size={30} />
    </a>
  </footer>

export default Footer
