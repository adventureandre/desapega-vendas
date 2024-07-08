import { api } from '@/data/api'

export default async function Home() {
  const response = await api('/user')
  const data = await response.json()

  return (
    <>
      <div>{data[0].name}</div>
      <div>{data[0].email}</div>
    </>
  )
}
