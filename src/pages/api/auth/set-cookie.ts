import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  // Este es un endpoint que solo acepta peticiones POST
  const { token } = await request.json();

  if (!token) {
    return new Response('Token no proporcionado', { status: 400 });
  }

  // Creamos la cookie 'user-session'
  cookies.set('user-session', token, {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 // Expira en 1 día
  });

  return new Response('Cookie establecida', { status: 200 });
};