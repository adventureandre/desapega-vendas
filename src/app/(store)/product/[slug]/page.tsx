import { Metadata } from 'next'

interface ProductProps {
  params: {
    slug: string
  }
}

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
