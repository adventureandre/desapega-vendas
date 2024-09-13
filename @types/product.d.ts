import { User } from './user'

export interface Product {
  id: string
  name: string
  description: string
  img: string
  price: number
  amount: number
  user_id: string
  created_at: Date
  update_at: Date
  user: User
}
