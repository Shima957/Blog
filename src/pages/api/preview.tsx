import { NextApiHandler } from "next";
import { client } from "../../libs/client";

const preview: NextApiHandler = async (req, res) => {
  if (!req.query.id) {
    return res.status(404).end()
  }

  const content = await client.get({
    endpoint: 'blog',
    contentId: req.query.id as string,
    queries: { draftKey: req.query.draftKey as string }
  })

  if (!content) {
    return res.status(401).json({ message: 'Invalid id' })
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey
  })

  res.writeHead(307, { Location: `/blog/${content.id}` })
  res.end('Preview mode enabled')
}

export default preview
