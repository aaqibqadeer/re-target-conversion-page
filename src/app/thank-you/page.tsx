// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client";

import { accordionItems } from "@/config/accordionData"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react";


const ThankyouMessage = () => {
    const searchParams = useSearchParams()
    const page = Number(searchParams.get('page') || 0)
    return accordionItems[page - 1]?.thankyouMessage || 'Thank you!'
}

export default function Home() {


  return (
    <div className='md:w-1/2'>
      <div className='p-6 rounded-lg text-center'>
        <Suspense>
          <h2 className='text-3xl mb-6'><ThankyouMessage/></h2>
        </Suspense>
        <div className='space-y-4'>
          <a
            href='https://gotchacovered.com'
            target='_blank'
            rel='noopener noreferrer'
            className='block block-color py-4 px-6 rounded-3xl text-xl'
          >
            Click here to go to Gotcha Covered’s site to look at our beautiful
            window treatments.
          </a>
          <a
            href='https://www.qrcodechimp.com/page/s8du81csv9jf?v=chk1709663379'
            target='_blank'
            rel='noopener noreferrer'
            className='block block-color py-4 px-6 rounded-3xl text-xl'
          >
            Click here to save our contact info into your address book
          </a>
        </div>
      </div>
    </div>
  )
}