import { ReactNode } from 'react'

interface TestLayoutProps {
  children: ReactNode
}
export default async function TestLayout({ children }: TestLayoutProps) {
  return <main>{children}</main>
}
