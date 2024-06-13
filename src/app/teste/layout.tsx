import { Metadata } from 'next'
import { ReactNode } from 'react'

interface TestLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Test',
  description: 'pagina de teste',
}
export default async function TestLayout({ children }: TestLayoutProps) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
