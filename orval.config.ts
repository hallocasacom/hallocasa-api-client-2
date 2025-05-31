import { defineConfig } from 'orval';

export default defineConfig({
  hallocasa: {
    input: {
      target: './openapi.json',
    },
    output: {
      mode: 'split',
      target: './src/api/endpoints',
      schemas: './src/api/model',
      client: 'react-query',
      mock: false,
      prettier: true,
      override: {
        mutator: {
          path: './src/api/custom-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useMutation: false,
          signal: true,
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
}); 