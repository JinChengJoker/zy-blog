import React from "react";
import {getPost, getPostFilenames} from "../../lib/posts";

type Props = {
  post: Post
}

export default (props: Props) => {
  const { post } = props
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <article>{post.content}</article>
    </div>
  )
}

export const getStaticPaths = async () => {
  const fileNames = await getPostFilenames()
  return {
    paths: fileNames.map(filename => ({
      params: {filename}
    })),
    fallback: false,
  }
}

type StaticProps = {
  params: {
    filename: string
  }
}

export const getStaticProps = async (staticProps: StaticProps) => {
  const post = await getPost(staticProps.params.filename)
  return {
    props: {
      post
    }
  }
}