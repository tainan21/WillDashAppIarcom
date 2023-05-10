import { FastifyInstance, FastifyError } from 'fastify';

import { prisma } from '../lib/prisma';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users/count', async (request, reply) => {
    try {
      const count = await prisma.user.count();
      return { count };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Unauthorized') {
          reply.status(401).send({ error: 'Unauthorized' });
          return;
        }
        reply.status(500).send({ error: 'Internal server error' });
      } else {
        reply.status(500).send({ error: 'Internal server error' });
      }
    }
  });
}
