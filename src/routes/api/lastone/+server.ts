import { json } from '@sveltejs/kit';

export async function GET() {
  const r = await fetch('http://127.0.0.1:3030/lastone');
  const data = await r.json();
  return json(data);
}
