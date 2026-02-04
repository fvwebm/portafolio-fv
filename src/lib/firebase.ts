// Importamos las herramientas que necesitamos de la librería de Firebase
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Aquí definimos la configuración usando las variables de entorno que guardamos en .env
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

// Inicializamos la aplicación de Firebase
// La lógica `getApps().length === 0` previene que la app se inicialice más de una vez
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Creamos y exportamos los servicios que usaremos en otras partes de nuestro sitio
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };