import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/app/api/lib/prisma'
import { convertToSlug } from '@/lib/utils'

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const sluginitial = (await params).slug

  const slug = z.string().parse(convertToSlug(sluginitial))

  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  })

  return NextResponse.json({ product })
}
