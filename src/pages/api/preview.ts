import { NextApiRequest, NextApiResponse } from "next"
import { client } from "../../libs/client"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.id) {
    return res.status(404).end()
  }

  const content = await client.get({
    endpoint: 'blog',
    contentId: req.query.id as string,
    queries: { draftKey: req.query.draftKey as string }
    // eslint-disable-next-line no-console
  }).then().catch(error => console.error(error));

  if (!content) {
    return res.status(401).json({ message: 'Invaild id' })
  }

  res.setPreviewData({
    id: content["id"],
    draftKey: req.query.draftKey
  })

  res.writeHead(307, { Location: `/blog/${content["id"]}` })
  res.end('Preview mode enabled')
}
