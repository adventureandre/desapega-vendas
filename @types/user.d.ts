import { Product } from './product'

interface User {
  id: string
  created_at: Date
  email: string
  name?: string | null
  password: string
  Product: Product[]
}
