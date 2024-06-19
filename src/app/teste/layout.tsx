import { Metadata } from 'next'
import { ReactNode } from 'react'

interface TestLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Test',
  description: 'pagina de teste',
}
export default function TestLayout({ children }: TestLayoutProps) {
  return <div>{children}</div>
}
