import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()

  const id = req.query.id

  const item = await db.getById(id as string)

  res.statusCode = 200
  res.status(200).json(item)
}

export default getAvo
