import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BlogPost, Comentarios } from '../../components/Posts'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from "next/link"

const PostDetails = () =>{
  
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);
  
  const [post, setPost] = useState<BlogPost>({ userId: 0, id: 0, title: "", body: "" })
  const [comments, setComments] = useState<Comentarios[]>([])
  const [user, setUser] = useState<any>()

  //legacy post fetching, without post author
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(res => res.json())  
  //     .then(data => setPost(data))
  //     .catch(error => console.error(`found an error on postdetails: ${error}`))
  // }, [id])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        const randomUserId = Math.floor(Math.random() * 10) + 1
        fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
          .then(res => res.json())
          .then(user => setUser(user))
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  }, [id])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.error(`error loading comments: ${error}`))
  }, [])

  return(<>
    <div id='main-div' className="w-[60%] m-auto">
      <div className="w-[70%] m-auto pt-[1rem] pb-[2rem]">
        <p className=""><Link href='/' className="hover:text-[blue]"><span className=""><HiOutlineArrowLeft/></span>Voltar</Link></p>
      </div>
      <div id='blog-post' className="flex flex-col items-center">
        <div id='header' className="w-[75%]">
          <p className="font-bold text-[2rem] capitalize text-center m-auto">{post.title}</p>
        </div>
        <div id='body' className="w-[60%] pt-[3rem] pb-[3rem] text-justify  ">
          <p>Post by: {user && user.name}</p>
          <p className="">{post.body}</p>
        </div>
        <div id='comments' className="w-[60%]">
          <p className="font-bold">Comentários:</p>
          {comments.map((comment, index) => (
            <div key={comment.id} className={`p-4 flex flex-col gap-1 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
              <p><span className="font-semibold">Name:</span> {comment.name}</p>
              <p><span className='font-semibold'>Email:</span> {comment.email}</p>
              <p><span className='font-semibold'>Message:</span> {comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>)
}

export default PostDetails