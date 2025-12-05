import React from 'react'
// import Bgimage from '../assets/Bg-image.png'
import Logo from '../assets/Logo (2).png'
import MobileLayout from '../layout/MobileLayout'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='width90'>
        <div className='main-header'>
          <img src={Logo} />
        <MobileLayout />
          <div className='header-content'>
            <a href='#/home'>Home</a>
            <a href='#/about'>About</a>
            <a href='#/contact'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
