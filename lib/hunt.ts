require('isomorphic-fetch');

export default async function getHuntRank() {
  try {
    const res = await fetch(
      'https://pws.ovr.ai/collectible/ranks?collectible_id=708cc2b0-3803-11ec-90d8-d36c70a26309',
    );

    const data = await res.json();

    return data.rank;
  } catch (err) {
    // empty
  }

  return [];
}
