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
    <div className="grid grid-cols-3 w-[70%] m-auto">
      {posts.map(post => (
        <div className="p-[2rem] m-[1rem] rounded-[1.5rem] border-[1px] shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] flex flex-col relative">
          <div className="flex flex-col items-center m-auto">
            <p className="text-center mb-[1rem] font-bold">{post.title}</p>
            <p className="mb-[1rem]">{post.body}</p>
          </div>
        <div className="absolute bottom-3 right-5">
          <p className="text-right font-bold">Ler mais</p>
        </div>
        </div>
      ))}
    </div>
  </>)
}

export default Posts