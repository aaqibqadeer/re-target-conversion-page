import Image from 'next/image'

export const Header = () => (
  <header className='bg-orange-500 text-white p-4 flex items-center gap-4'>
    <Image src='/logo.png' alt='Logo' width={50} height={50} />
    <h1 className='text-3xl font-bold'>Healthy Living Guide</h1>
  </header>
)
