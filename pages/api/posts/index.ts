import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const response = await fetch(API_URL)
    const data = await response.json()
    return res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    })
    const data = await response.json()
    return res.status(201).json(data)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
