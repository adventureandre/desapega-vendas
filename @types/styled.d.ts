import theme from '@/styles/Theme'
import 'styled-components'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
