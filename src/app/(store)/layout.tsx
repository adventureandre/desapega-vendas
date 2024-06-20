import Header from '@/components/Header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] ">
      <Header />
      {children}
    </div>
  )
}
