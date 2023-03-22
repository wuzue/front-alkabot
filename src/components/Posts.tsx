import { useEffect, useState } from "react"

interface BlogPost{
  userId: number,
  id: number,
  title: string,
  body: string,
}

function Posts(){
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error))
  }, [])

  return(<>
    <div>
      {posts.map(post => (
        <p>{post.body}</p>
      ))}
    </div>
  </>)
}

export default Posts