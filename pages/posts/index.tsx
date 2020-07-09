import React from "react";
import {getPosts} from "lib/posts";

type Props = {
  posts: Post[]
}

export default (props: Props) => {
  const {posts} = props
  return (
    <div>
      <h1>文章列表</h1>
      <ul>
        {posts.map(post => (
          <li key={post.filename}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}