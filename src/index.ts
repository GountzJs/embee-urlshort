import { Hono } from 'hono';

const app = new Hono();

const redirects: Map<string, string> = new Map([
  ['/cuando-juega', 'https://youtu.be/z6age9Y_BUk?si=P-U-K3gWviKgyFwQ'],
  ['/discord', 'https://discord.com/invite/R2nnut7YWS'],
  ['/youtube', 'https://www.youtube.com/channel/UCy7lny2Flbq6FAb7cv8eG0Q'],
  ['/twitter', 'https://x.com/EmBeeJay_'],
  ['/donaciones', 'https://streamelements.com/embeejayz/tip'],
  ['/instagram', 'https://www.instagram.com/embeejayz']
]);

app.get('*', (c) => {
  const url = c.req.path;
  const redirect = redirects.get(url);
  if (redirect) {
    return c.redirect(redirect, 302);
  }

  return c.notFound();
});

export default app;
