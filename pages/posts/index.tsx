import React from "react";
import {getPosts} from "lib/posts";
import Link from "next/link";

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
          <li key={post.filename}>
            <Link href='/posts/[filename]' as={`/posts/${post.filename}`}>
              <a>{post.title}</a>
            </Link>
          </li>
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