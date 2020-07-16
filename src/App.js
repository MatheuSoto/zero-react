import React from 'react'
import { useStateValue } from './store'
import Logo from '@img/icon.png'

export default () => {
  const [{ counter }, dispatch] = useStateValue()

  return (
    <div className='h-screen w-screen fixed flex items-center justify-center font-medium text-lg'>
      <div>
        <img src={Logo} alt='logo' />
        Zero Start
      </div>
      <div className='flex items-center justify-between w-32 absolute bottom-0 pb-10'>
        <button className='p-2 bg-primary rounded text-white cursor-pointer' onClick={() => dispatch({ type: 'add', number: counter.number - 1 })}>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z' /></svg>
        </button>
        <div className='text-lg'>{counter.number.toString()}</div>
        <button className='p-2 bg-primary rounded text-white cursor-pointer' onClick={() => dispatch({ type: 'add', number: counter.number + 1 })}>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' t='1551322312294' viewBox='0 0 1024 1024' version='1.1' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><defs /><path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z' /><path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z' /></svg>
        </button>
      </div>
    </div>
  )
}
