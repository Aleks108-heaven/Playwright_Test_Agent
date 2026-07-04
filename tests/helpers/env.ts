export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

export function buildUniqueEmail(): string {
  return `user${Date.now()}_${Math.floor(Math.random() * 100000)}@example.com`;
}
