import { PrismaClient } from '@prisma/client';

// Créer une instance unique de Prisma Client
const prisma = new PrismaClient();

// Vérifier la connexion à la base de données au démarrage
async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ Connecté à la base de données MySQL');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error);
    process.exit(1);
  }
}

// Export pour utilisation dans les contrôleurs + fonction de connexion
export { prisma, connectDB };