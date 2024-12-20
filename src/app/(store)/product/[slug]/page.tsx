import { Metadata } from 'next'

import { api } from '@/lib/api'

import { Product as ProductItens } from '../../../../../@types/product'

interface ProductProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const title = (await params).slug

  return {
    title,
  }
}

async function getProduct(slug: string): Promise<ProductItens | null> {
  const response = await api(`/products/${slug}`, {
    // cache: 'no-store',
    next: {
      revalidate: 60 * 60, // 1hour
    },
  })

  const { product } = await response.json()

  if (product) {
    return product
  }

  return null
}

export default async function Product({ params }: ProductProps) {
  const slug = (await params).slug

  const items = await getProduct(slug)

  return (
    <>
      {items ? (
        <div>
          <div>{items?.name}</div>
          <div>{items?.price}</div>
          <div>{items?.description}</div>
        </div>
      ) : (
        <div>esse produto nao existe</div>
      )}
    </>
  )
}
