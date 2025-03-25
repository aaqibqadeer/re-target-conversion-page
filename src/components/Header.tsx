import React from 'react'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className='bg-orange-500 text-white py-4 px-6 flex items-center'>
      <div className='flex items-center'>
        <Image
          src='https://cdn0030.qrcodechimp.com/qr/PROD/65c0d68649896c631f30b301/ga/65c0d69ec4ffa1707136670/17071366704usfoy.jpg'
          alt='Logo'
          width={90}
          height={90}
          className='mr-4'
        />
        <h1 className='text-5xl font-bold ml-4'>
          RE-Target (Optional Heading)
        </h1>
      </div>
    </header>
  )
}
