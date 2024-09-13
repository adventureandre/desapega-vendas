import Image from 'next/image'

export function Item() {
  return (
    <article className="p-2 rounded-md bg-desapegaWhite min-h-[350px] min-w-[270px]">
      <Image
        className="w-[250px] h-[300px] rounded-md mb-1"
        src="/images/carinho-de-bb.png"
        alt=""
        width={450}
        height={450}
      />
      <span className="text-zinc-900 font-bold">R$2.500,00</span>
      <h3 className="text-md text-zinc-900 text-left">Carrinho de Bebê</h3>

      <p className="text-zinc-600">
        sem marca <br /> Wakter Johson - Unico
      </p>
    </article>
  )
}
