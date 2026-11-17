import React from 'react'
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div
    className='w-full h-screen flex justify-center items-center bg-surface-200'>
      <Loader2 size={24} className='text-surface-900 animate-spin' />
    </div>
  )
}

export default Loader
