'use client'

import { useState } from 'react'

type FormProps = {
  config: {
    requiredFields: string[]
    optionalFields: string[]
  }
}

export const Form = ({ config }: FormProps) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const missingFields = config.requiredFields.filter(
      (field) => !form[field as keyof typeof form]
    )
    setErrors(missingFields)
    if (missingFields.length === 0) {
      alert('Form submitted successfully!')
      setForm({ firstName: '', lastName: '', email: '', phone: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {['firstName', 'lastName', 'email', 'phone'].map((field) => (
        <div key={field}>
          <label className='block text-lg font-medium capitalize'>
            {field}{' '}
            {config.requiredFields.includes(field) && (
              <span className='text-red-600'>*</span>
            )}
          </label>
          <input
            type='text'
            name={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md text-lg'
          />
          {errors.includes(field) && (
            <p className='text-red-600 text-sm'>This field is required.</p>
          )}
        </div>
      ))}

      <button
        type='submit'
        className='bg-orange-500 text-white font-bold py-2 px-4 rounded-md text-lg w-full'
      >
        Submit
      </button>
    </form>
  )
}
