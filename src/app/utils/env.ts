type TEnvVar = (v: string) => string | null;

// retrieves the environment variable from either the
// process.env (server side)
// or the window.env (client side)
export function envVar<T>(v: string): T | TEnvVar | null {
  return (process.browser ? window.env[v] : process.env[v]) || null;
}
