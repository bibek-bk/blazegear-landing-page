import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductsState {
  featuredProducts: Product[]
}

const initialState: ProductsState = {
  featuredProducts: [
    {
      id: 1,
      name: 'Ultra-Slim Laptop',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 2,
      name: 'Wireless Noise-Canceling Headphones',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      name: 'Smart Home Hub',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  ],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add reducers here if needed
  },
})

export default productsSlice.reducer

