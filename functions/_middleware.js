const BLOCKED_PATTERNS = [
  /^\/\.env(\..*)?$/,   // .env, .env.local, .env.production, etc.
  /^\/\.git(\/|$)/,     // .git directory and its contents
];

export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);

  if (BLOCKED_PATTERNS.some((re) => re.test(pathname))) {
    return new Response("Forbidden", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return context.next();
}
