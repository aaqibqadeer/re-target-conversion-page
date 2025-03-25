'use client'

import { useState } from 'react'
import { accordionData } from '@/config/accordionData'
import { Form } from './Form'

export const Accordion = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className='space-y-4'>
      {accordionData.map((item) => (
        <div key={item.id} className='border border-orange-400 rounded-md'>
          <button
            className='w-full text-left p-4 bg-orange-200 text-lg font-semibold'
            onClick={() =>
              setActiveId((prev) => (prev === item.id ? null : item.id))
            }
          >
            {item.title}
          </button>
          {activeId === item.id && (
            <div className='p-4 bg-orange-50'>
              <Form config={item.formConfig} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
