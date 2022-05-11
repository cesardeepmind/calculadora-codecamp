import React from 'react'
import FreeLogo from '../images/freecodecamp-logo.png';

const Logo = () => {
  return (
    <div className='free-logo-contenedor'>
        <img 
          src={FreeLogo}
          className='free-logo'
          alt='Logo de Free'
        />
    </div>
  )
}

export default Logo