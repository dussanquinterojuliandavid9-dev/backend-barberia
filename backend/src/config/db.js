import pg from 'pg';
import { config } from './environment.js';

// 1. Pool de PostgreSQL
const pool = new pg.Pool(config.postgres);

// 2. Conectar la base de datos
export async function connectDatabases() {
  await pool.query('SELECT NOW()');
  console.log('🐘 [PostgreSQL] Conexión establecida exitosamente');
}

// 3. Cerrar la conexión (apagado ordenado)
export async function disconnectDatabases() {
  await pool.end();
}

export { pool };  