import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`

  switch (req.method) {
    case 'GET': {
      const response = await fetch(url)
      const data = await response.json()
      return res.status(200).json(data)
    }

    case 'PUT': {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      })
      const data = await response.json()
      return res.status(200).json(data)
    }

    case 'DELETE': {
      await fetch(url, { method: 'DELETE' })
      return res.status(204).end()
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
