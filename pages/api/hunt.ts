import getHuntRank from '../../lib/hunt';

export default async function handler(req, res) {
  const recordData = await getHuntRank();

  return res.status(200).json(recordData);
}
