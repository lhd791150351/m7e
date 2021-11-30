require('isomorphic-fetch');

export default async function getLiveConfig() {
  try {
    const res = await fetch('https://m7e.mete.work/api/live');

    const data = await res.json();

    return data.m3u8;
  } catch (err) {
    // empty
  }

  return '';
}
