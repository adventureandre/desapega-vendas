'use client'

import { Main } from '@/components/Main'
import Theme from '@/styles/Theme'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <p>home</p>
    </ThemeProvider>
  )
}
