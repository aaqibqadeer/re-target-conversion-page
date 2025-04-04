import { AccordionItem } from '@/config/accordionData'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


interface FormProps {
  item: AccordionItem
}


export const Form: React.FC<FormProps> = ({ item }) => {
  const { formConfig, subheading } = item
  const initialState = formConfig.fields.reduce((acc, field) => {
    acc[field.name] = ''
    return acc
  }, {} as Record<string, string>)

  const [formData, setFormData] = useState<Record<string, string>>(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true
    const newErrors: Record<string, string> = {}

    formConfig.fields.forEach((field) => {
      if (field.required && !formData[field.name].trim()) {
        valid = false
        newErrors[field.name] = `${field.label} is required.`
      }
    })

    if (!valid) {
      setErrors(newErrors)
      return
    }

    console.log('Form submitted:', formData)

    // Reset form
    setFormData(initialState)
    router.push(`/thank-you?page=${item.id}`)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <h3 className=''>{subheading}</h3>
      {formConfig.fields.map((field) => (
        <div key={field.name}>
          <label className='block text-lg  mb-1' htmlFor={field.name}>
            {field.label}{' '}
            {field.required && <span className='text-red-500'>*</span>}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg'
          />
          {errors[field.name] && (
            <p className='mt-1 text-red-600 text-sm'>{errors[field.name]}</p>
          )}
        </div>
      ))}
      <button
        type='submit'
        className='w-full block-color py-2 px-4 rounded-3xl text-xl'
      >
        Submit
      </button>
    </form>
  )
}