require('isomorphic-fetch');

export default async function getHuntRank() {
  try {
    const res = await fetch(
      'https://pws.ovr.ai/collectible/ranks?collectible_id=b900e8be-1a30-11ec-b4a4-95e100f927f0',
    );

    const data = await res.json();

    return data.rank;
  } catch (err) {
    // empty
  }

  return [];
}
