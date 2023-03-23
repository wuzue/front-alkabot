import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BlogPost } from '../../components/Posts'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from "next/link"

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
    <div id='main-div' className="w-[60%] m-auto">
      <div className="w-[70%] m-auto pt-[1rem] pb-[2rem]">
        <p className=""><Link href='/' className="hover:text-[blue]"><span className=""><HiOutlineArrowLeft/></span>Voltar</Link></p>
      </div>
      <div id='blog-post' className="flex flex-col items-center">
        <div id='header' className="w-[75%]">
          <p className="font-bold text-[2rem] capitalize text-center m-auto">{post.title}</p>
        </div>
        <div id='body' className="w-[60%] pt-[3rem] text-justify  ">
          <p>{post.body}{post.body}{post.body}{post.body}</p>
          <br/>
          <p>{post.body}{post.body}{post.body}</p> 
          <br/>
          <p>{post.body}{post.body}{post.body}{post.body}</p>
        </div>
      </div>
    </div>
  </>)
}

export default PostDetails