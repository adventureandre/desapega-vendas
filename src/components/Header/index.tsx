import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div>
        <Link href={'/'}>Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>Entrar</Link>
          </li>
          <li>
            <Link href={'/contact'}>Anunciar</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
