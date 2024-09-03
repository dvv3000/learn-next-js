import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicPaths = ['/auth/login', '/auth/register']
const privatePaths = ['/me']
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('sessionToken')?.value
  const {pathname: currPath} = request.nextUrl

  if (publicPaths.includes(currPath) && token) {
    return NextResponse.redirect(new URL('/me', request.url))
  } else if (publicPaths.includes(currPath) && !token) {
    return NextResponse.next()
  } else if (privatePaths.includes(currPath) && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/auth/login', '/auth/register', '/me'
  ],
}