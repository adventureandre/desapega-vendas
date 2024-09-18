import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { convertToSlug } from '@/lib/utils'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(convertToSlug(params.slug))

  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  })

  return NextResponse.json({ product })
}
