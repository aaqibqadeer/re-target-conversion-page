// data/config.ts
export const accordionItems = [
  {
    id: 1,
    title: 'I’d like to have a custom window expert call me',
    formConfig: {
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true
        },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true }
      ]
    }
  },
  {
    id: 2,
    title: 'I’d like to send information to my home buyer client',
    formConfig: {
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true
        },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true }
      ]
    }
  },
  // {
  //   id: 3,
  //   title: 'Statement 3',
  //   formConfig: {
  //     fields: [
  //       {
  //         name: 'firstName',
  //         label: 'First Name',
  //         type: 'text',
  //         required: true
  //       },
  //       { name: 'lastName', label: 'Last Name', type: 'text', required: true },
  //       { name: 'email', label: 'Email', type: 'email', required: false },
  //       { name: 'phone', label: 'Phone Number', type: 'tel', required: true }
  //     ]
  //   }
  // }
]
