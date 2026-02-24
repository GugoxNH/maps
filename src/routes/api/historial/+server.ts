import { json, error } from '@sveltejs/kit';

export async function GET({ url }) {
  const imei = url.searchParams.get('imei');
  const startDate = url.searchParams.get('startDate');
  const endDate = url.searchParams.get('endDate');

  if (!imei || !startDate || !endDate) {
    throw error(400, 'Faltan parámetros: imei, startDate, endDate');
  }

  const target = new URL('http://127.0.0.1:3030/historial');
  target.searchParams.set('imei', imei);
  target.searchParams.set('startDate', startDate);
  target.searchParams.set('endDate', endDate);

  const r = await fetch(target);
  const data = await r.json();
  return json(data);
}
