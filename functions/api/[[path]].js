export async function onRequest(context) {
  const url = new URL(context.request.url);
  const newUrl = new URL(url.pathname + url.search, "https://api.planBadmin.com");
  
  // Clone the headers to a new mutable Headers object
  const headers = new Headers(context.request.headers);
  const isSecuredRoute =
    newUrl.pathname.startsWith("/api/audit/accessibility/") ||
    newUrl.pathname.startsWith("/api/ventures/security-audit/");
  const apiToken = context.env.PLANB_API_TOKEN || context.env.API_TOKEN;

  // Update the Host header to match the target API
  headers.set("Host", newUrl.hostname);
  // Also remove Origin if it's there to let server accept POSTs gracefully
  headers.delete("Origin");

  // Secured routes require a bearer token injected at the edge.
  if (isSecuredRoute) {
    if (!apiToken) {
      return new Response(JSON.stringify({ error: "API token is not configured." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    headers.set("Authorization", `Bearer ${apiToken}`);
  }
  
  // Perform the fetch to the backend 
  const response = await fetch(newUrl.toString(), {
    method: context.request.method,
    headers: headers,
    body: (context.request.method !== 'GET' && context.request.method !== 'HEAD') ? context.request.body : null,
    redirect: "manual"
  });

  // Return the fetched response back to the client
  return response;
}