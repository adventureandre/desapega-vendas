import { Metadata } from 'next'

import { api } from '@/lib/api'

interface ProductProps {
  params: {
    slug: string
  }
}

// async function getProduct(slug: string): Promise<Product> {
//   const response = await api(`/products/${slug}`, {
//     // cache: 'no-store',
//     next: {
//       revalidate: 60 * 60, // 1hour
//     },
//   })

//   const products = await response.json()

//   return products
// }

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  return {
    title: params.slug,
  }
}

export default function Product({ params }: ProductProps) {
  const product = params.slug
  return <div>{product}</div>
}
