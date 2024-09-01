const server = Bun.serve({
  port: 8000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      return new Response("./yenn.html",{
        headers: {
          "Content-Type": "text/html; charset=utf-8"
        }
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
