import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Field {
  name: string
  label: string
  type: string
  required: boolean
}

interface FormConfig {
  fields: Field[]
}

interface FormProps {
  formConfig: FormConfig
}

export const Form: React.FC<FormProps> = ({ formConfig }) => {
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
    // Clear error on field change
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

    // Submit form (for now, just log the data)
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
    // Reset form if needed
    setFormData(initialState)
    router.push('/thank-you')
    
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <h3 className=''>
        Input your name and mobile # and a rep will call you soon!
      </h3>
      {formConfig.fields.map((field) => (
        <div key={field.name}>
          <label
            className='block text-lg  mb-1'
            htmlFor={field.name}
          >
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