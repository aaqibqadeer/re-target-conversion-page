// data/config.ts
export const accordionItems = [
  {
    id: 1,
    title: 'I’d like to have a custom window expert call me',
    subheading: 'Input your name and mobile # and a rep will call you soon!',
    formConfig: {
      fields: [
        { name: 'name', label: 'Name:', type: 'text', required: true },
        { name: 'mobile', label: 'Mobile:', type: 'tel', required: true }
      ]
    }
  },
  {
    id: 2,
    title: 'I’d like to send more info & a coupon to my clients',
    subheading: 'Input your name and email and we will send you more info soon!',
    formConfig: {
      fields: [
        { name: 'name', label: 'Name:', type: 'text', required: true },
        { name: 'email', label: 'Email:', type: 'email', required: true },
      ]
    }
  }
]


export type AccordionItem = (typeof accordionItems)[0]
