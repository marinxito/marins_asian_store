import mongoose from "mongoose";
import { setServers } from "node:dns";

// Fuerza resolvers DNS públicos (Cloudflare / Google) para la búsqueda SRV
// que exige el esquema "mongodb+srv://". Soluciona el error
// "querySrv ECONNREFUSED" en redes/plataformas cuyo DNS por defecto no
// resuelve registros SRV (afecta tanto a local como a Vercel).
setServers(["1.1.1.1", "8.8.8.8"]);

// Guarda la clave para conectar la base de datos.
const DATABASE_URI = process.env.DATABASE_URI;

// Veifica si la clave para conectar la base de datos existe.
if (!DATABASE_URI) {
  throw new Error("No DATABASE_URI environment variable found.");
}

// Variable que almacena una única conexión y poder usarla donde sea, en lugar de crear una nueva conexión cada vez.
let cached = global.mongoose || { conn: null, promise: null };

// Función asíncrona para la conexión ya que haremos uso de promesas.
export const mongoConnect = async () => {
  try {
    // Verifica si la conexión ya está hecha, sería el caso luego de que se ejecute la función por primera vez. Entonces sólo la devolvería.
    if (cached.conn) {
      console.log("Connected from the previous.");
      return cached.conn;
    }

    // Si la conexión ya está hecha, se asigna nuevamente, si no, creamos una nueva conexión.
    cached.promise =
      cached.promise ||
      mongoose.connect(DATABASE_URI, {
        dbName: "marins",
        bufferCommands: false,
      });

    // Espera a que se realice la conexión exitosamente.
    cached.conn = await cached.promise;

    console.log("Connection successful");
    // Retorna la conexión
    return cached.conn;
  } catch (error) {
    // Resetea la promesa cacheada para que el próximo intento reconecte.
    cached.promise = null;
    console.error("Mongo connection error:", error);
    throw error;
  }
};
