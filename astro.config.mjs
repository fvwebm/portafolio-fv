/*import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  //output: 'server',
  integrations: [tailwind()]
});*/

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ¡ESTA ES LA LÍNEA QUE SOLUCIONA EL ERROR DE JSON!
  // Le dice a Astro que se comporte como un servidor dinámico.
  output: 'server', 
  integrations: [tailwind()]
});