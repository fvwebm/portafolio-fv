import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Configuración de salida estática (SSG)
// Esto permite que el sitio se despliegue en cualquier lugar sin errores de adaptador.
export default defineConfig({
  integrations: [tailwind()],
});