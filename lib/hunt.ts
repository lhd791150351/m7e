require('isomorphic-fetch');

export default async function getHuntRank() {
  try {
    const res = await fetch(
      'https://pws.ovr.ai/collectible/ranks?collectible_id=1e17cfea-3bcc-11ec-bb9e-3f82d823feeb_7ab86f3f-3bcc-11ec-a9df-3f82d823feeb_bce7a679-3bcc-11ec-9792-3f82d823feeb_d3f2e3a1-3bcc-11ec-b9d3-3f82d823feeb',
    );

    const data = await res.json();

    return data.rank;
  } catch (err) {
    // empty
  }

  return [];
}
