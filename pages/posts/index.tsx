import React from "react";
import {usePosts} from "hooks/usePosts";

export default () => {
  const {posts, loading} = usePosts()
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