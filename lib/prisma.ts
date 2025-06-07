import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testDB() {
  try {
    await prisma.$connect();
    console.log("✅ Conexión exitosa con PostgreSQL");
  } catch (error) {
    console.error("❌ Error al conectar a PostgreSQL:", error);
  }
}

// Opcional: ejecutar la prueba solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  testDB();
}

export { prisma };
