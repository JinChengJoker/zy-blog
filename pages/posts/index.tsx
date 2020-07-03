import React, {useEffect, useState} from "react";
import axios from 'axios'

type Post = {
  filename: string
  title: string
  data: string
  content: string
}

export default () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/api/v1/posts').then(
      ({data}) => {
        setPosts(data)
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )
  }, [])
  return (
    <div>
      <h1>文章列表</h1>
      {loading ? <div>正在加载</div> :
        posts.length === 0 ? <div>没有文章</div> :
          (
            <ul>
              {posts.map(post => (
                <li key={post.filename}>{post.title}</li>
              ))}
            </ul>
          )}
    </div>
  )
}