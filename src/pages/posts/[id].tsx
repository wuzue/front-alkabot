import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BlogPost } from '../../components/Posts'

const PostDetails = () =>{
  
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);
  
  const [post, setPost] = useState<BlogPost>({ userId: 0, id: 0, title: "", body: "" })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(error => console.error(`found an error on postdetails: ${error}`))
  }, [id])

  return(<>
    <div>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      <p>tasdsadesadsadsadasda</p>
    </div>
  </>)
}

export default PostDetails