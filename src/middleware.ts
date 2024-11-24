import { NextResponse } from 'next/server'

import { isLoggedIn } from './app/api/middleware/mymiddleware'

export function middleware(request: Request) {
  if (!isLoggedIn) {
    // Aki no lugar do  redirect depois colocar a resposta
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/api/(.*)',
}
