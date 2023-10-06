import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/test', () => Bun.file('./src/views/index.html'))
  .get('/hello', () => 'Hello from Bun & HTMX!')
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
