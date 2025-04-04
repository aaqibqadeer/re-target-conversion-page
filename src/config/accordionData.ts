// data/config.ts
export const accordionItems = [
  {
    id: 1,
    title: 'I’d like to have a custom window expert call me',
    subheading: 'Input your name and mobile # and a rep will call you soon!',
    thankyouMessage: 'Thank you! Someone will be calling you soon',
    formConfig: {
      fields: [
        { name: 'name', label: 'Name:', type: 'text', required: true },
        { name: 'mobile', label: 'Mobile:', type: 'tel', required: true }
      ]
    }
  },
  {
    id: 2,
    title: "I'd like a coupon for my clients or myself",
    subheading:
      "Input your name and email and we'll send you your coupons asap!",
    thankyouMessage: "Thank you! You'll receive your coupon soon!",
    formConfig: {
      fields: [
        { name: 'name', label: 'Name:', type: 'text', required: true },
        { name: 'email', label: 'Email:', type: 'email', required: true }
      ]
    }
  }
]


export type AccordionItem = (typeof accordionItems)[0]
