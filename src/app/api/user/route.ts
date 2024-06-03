import { NextResponse } from 'next/server'
import { userStore } from '../../../../store/userStore'

export async function GET() {
  const allUsers = await userStore.getState().getAllUsers()
  return NextResponse.json(allUsers)
}
