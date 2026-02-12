/*import type { APIRoute } from 'astro';

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
};*/

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Intentamos leer el token enviado desde el login
    const body = await request.json();
    const token = body.token;

    if (!token) {
      return new Response('Token no proporcionado', { status: 400 });
    }

    // Creamos la cookie de sesión de forma segura
    cookies.set('user-session', token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // La sesión dura 24 horas
    });

    return new Response(JSON.stringify({ message: 'Sesión iniciada' }), { status: 200 });
  } catch (error) {
    // Si el cuerpo está vacío o mal formado, devolvemos un error controlado
    return new Response(JSON.stringify({ error: 'Error al procesar la sesión' }), { status: 400 });
  }
};