'use client';

import React, { useState } from 'react'
import { accordionItems } from '@/config/accordionData'
import {Form} from './Form'

interface AccordionItem {
  id: number
  title: string
  formConfig: {
    fields: {
      name: string
      label: string
      type: string
      required: boolean
    }[]
  }
}

export const Accordion: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setActiveItem((prev) => (prev === id ? null : id))
  }

  return (
    <div className='space-y-4'>
      {accordionItems.map((item: AccordionItem) => (
        <div key={item.id} className='border rounded-lg overflow-hidden shadow'>
          <button
            className='w-full text-left px-4 py-3 bg-orange-100 hover:bg-orange-200 focus:outline-none flex items-center'
            onClick={() => toggleItem(item.id)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 inline mr-2 ${
                activeItem === item.id ? 'rotate-180' : ''
              }`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
            <span className='text-xl font-semibold'>{item.title}</span>
          </button>
          {activeItem === item.id && (
            <div className='p-4 bg-white'>
              <Form formConfig={item.formConfig} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
