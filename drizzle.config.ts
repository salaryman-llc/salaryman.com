import { type Config } from 'drizzle-kit';

import { env } from '~/env';

export default {
  schema: './src/server/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: env.DATABASE_URL,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    authToken: env.DATABASE_TOKEN,
  },
} satisfies Config;
