import { prisma } from '@/lib/prisma'

export default function Home() {
  async function handleUser(form: FormData) {
    'use server'

    const email = form.get('name') as string

    if (!email) {
      return
    }

    const user = await prisma.user.findMany({
      where: {
        email,
      },
    })
    console.log(user)
  }

  return (
    <form action={handleUser} method="POST">
      <input type="text" name="name" placeholder="sulug" />
      <button type="submit">Consutar</button>
    </form>
  )
}
