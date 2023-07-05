import path from 'path';

const pathToStarterQueries = (filename: string): string => path.join(__dirname, 'starter_queries', filename);

export { pathToStarterQueries };
