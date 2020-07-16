import React from 'react'
import Logo from '@img/icon.png'

export default () => {
  return (
    <div className='h-screen w-screen fixed flex items-center justify-center font-medium text-lg'>
      <div>
        <img src={Logo} alt='logo' />
        Zero Start
      </div>
    </div>
  )
}
