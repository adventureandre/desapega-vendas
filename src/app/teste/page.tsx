import { userStore } from '../../store/userStore'

export default function Home() {
  async function handleUser(form: FormData) {
    'use server'

    const email = form.get('name') as string

    if (!email) {
      return
    }

    const user = await userStore.getState().findbyEmail(email)
    console.log('user', user)
  }

  return (
    <form action={handleUser}>
      <input type="text" name="name" placeholder="sulug" />
      <button type="submit">Consutar</button>
    </form>
  )
}
