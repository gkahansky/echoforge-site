const BLOCKED_PATTERNS = [
  /^\/\.env(\..*)?$/,   // .env, .env.local, .env.production, etc.
  /^\/\.git(\/|$)/,     // .git directory and its contents
  /^\/config\.php$/i,   // config.php
  /^\/database\.php$/i, // database.php (also flagged in report)
  /^\/backup\.(zip|tar\.gz)$/i, // backup archives (also flagged in report)
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
