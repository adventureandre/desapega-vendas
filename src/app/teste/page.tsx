'use client'
import { useEffect } from 'react'

import { userStore } from '@/store/userStore'
import { Metadata } from 'next' 

export default function Teste() {
  const { users, load } = userStore((store) => {
    return {
      users: store.users,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1>Teste</h1>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
