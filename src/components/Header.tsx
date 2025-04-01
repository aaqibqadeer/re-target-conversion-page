import React from 'react'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className='py-4 px-6 flex items-center'>
      <div className='flex items-center'>
        <Image
          src='/images/logo.webp'
          alt='Logo'
          width={180}
          height={180}
          className='mr-4'
        />
        {/* <h1 className='text-5xl font-bold ml-4'>
          RE-Target (Optional Heading)
        </h1> */}
      </div>
    </header>
  )
}
