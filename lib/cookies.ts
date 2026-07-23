'use server';

import { cookies } from 'next/headers';

/**
 * Sets a secure, HTTP-only cookie on the server side.
 * Supported only in Server Actions and Route Handlers.
 */
export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  
  cookieStore.set('session_token', token, {
    httpOnly: true, // Prevents client-side JS from accessing the token
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
  });
}

/**
 * Reads a cookie value on the server side.
 * Supported in Server Components, Server Actions, and Route Handlers.
 */
export async function getSessionCookie() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session_token');
  return cookie?.value || null;
}

/**
 * Deletes a cookie from the client browser.
 */
export async function deleteSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('session_token');
}
