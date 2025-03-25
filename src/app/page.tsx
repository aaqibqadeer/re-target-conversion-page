import { Header } from '@/components/Header'
import { Accordion } from '@/components/Accordion'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <section className='flex flex-col lg:flex-row gap-6 mt-6 p-4'>
        <div className='w-full lg:w-1/2'>
          <Image
            src='/sample-image.jpg'
            alt='Healthy Life'
            width={800}
            height={600}
            className='rounded-xl w-full h-auto'
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <Accordion />
        </div>
      </section>
    </main>
  )
}
