export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/users/mypage',
    '/users/info',
    '/users/edit',
    '/users/likes',
    '/users/comments',
    '/users/bookings/:path*',
    '/rooms/register/:path',
    '/users/rooms',
  ],
}
