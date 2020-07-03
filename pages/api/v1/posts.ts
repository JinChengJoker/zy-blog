import {NextApiRequest, NextApiResponse} from "next";
import {getPosts} from "lib/posts";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const posts = await getPosts()
  response.statusCode = 200
  response.json(posts)
}