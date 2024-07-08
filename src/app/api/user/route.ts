import { userStore } from '@/store/userStore'
import { NextResponse } from 'next/server'

export async function GET() {
  const allUsers = await userStore.getState().getAllUsers()
  return NextResponse.json(allUsers)
}
