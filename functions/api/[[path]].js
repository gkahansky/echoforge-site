export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // construct the new URL keeping everything exactly the same, but changing the origin
  const newUrl = new URL(url.pathname + url.search, "https://api.planBadmin.com");
  
  // Create a new request based on the original one, keeping headers and method
  const newRequest = new Request(newUrl, context.request);
  
  // Actually perform the fetch to the backend 
  const response = await fetch(newRequest);

  // Return the fetched response back to the client
  return response;
}