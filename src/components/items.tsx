import { Product } from '@prisma/client'
import Image from 'next/image'

import { numberToReal } from '@/util/helpers'

interface ItemProps {
  item: Product
}

export function Item({ item }: ItemProps) {
  return (
    <article className="p-2 rounded-md bg-desapegaWhite min-h-[350px] min-w-[270px]">
      <Image
        className="w-[250px] h-[300px] rounded-md mb-1"
        src={item.img}
        alt=""
        width={450}
        height={450}
      />
      <span className="text-zinc-900 font-bold">
        {numberToReal(item.price)}
      </span>
      <h3 className="text-md text-zinc-900 text-left">{item.name}</h3>

      <p className="text-zinc-600">
        {item.description} - {item.amount}
      </p>
    </article>
  )
}
