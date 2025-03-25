import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <div className='max-w-6xl mx-auto p-4'>{children}</div>
)

export default Layout
