import {useEffect, useState} from "react";
import axios from "axios";

type Post = {
  filename: string
  title: string
  data: string
  content: string
}

export const usePosts = () => {
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
  return {posts, setPosts, loading, setLoading}
}