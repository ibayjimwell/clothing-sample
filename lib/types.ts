export interface Product {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  category: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  facebookName: string
  contactNumber: string
  address: string
  email?: string
  items: CartItem[]
  total: number
  createdAt: Date
}
