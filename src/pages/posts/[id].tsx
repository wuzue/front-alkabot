import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BlogPost, Comentarios } from '../../components/Posts'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from "next/link"

const PostDetails = () =>{
  
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);
  const [comments, setComments] = useState<Comentarios[]>([])
  const [post, setPost] = useState<BlogPost>({ userId: 0, id: 0, title: "", body: "" })
  const [user, setUser] = useState<any>()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        // assim como na home do blog, puxa os autores de forma aleatória,
        // para deixar o blog um pouco mais completo. Estou usando os nomes
        // de forma aleatória, devido ao fato de ter menos usuários do que posts,
        // para evitar de ficar repetindo nomes, então deixo o blog decidir :D
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
      .then(data => {
        setComments(data)})
      .catch(error => console.error(`error loading comments: ${error}`))
  }, [])
  
  return(<>
    <div id='main-div' className="w-[60%] m-auto max-[750px]:w-full">
      <div className="w-[70%] m-auto pt-[1rem] pb-[2rem]">
        <p className=""><Link href='/' className="hover:text-[blue]"><span className=""><HiOutlineArrowLeft/></span>Voltar</Link></p>
      </div>
      <div id='blog-post' className="flex flex-col items-center">
        <div id='header' className="w-[75%] max-[750px]:w-[90%]">
          <p className="text-[#f2cc8f] text-[2rem] capitalize text-center m-auto">{post.title}</p>
        </div>
          <p className="mt-[1rem]">Post by: {user && user.name}</p>
        <div id='body' className="w-[60%] pt-[1rem] pb-[1rem] text-justify text-[1.3rem] max-[750px]:w-[90%]">
          <p className="">{post.body}</p>
        </div>
        <div id='comments' className="w-[60%] max-[750px]:w-[100%]">
          <div className="mt-[1rem] mb-[1rem] h-[.5px] bg-[#f2cc8f] w-[50%] text-[#f2cc8f] m-auto"></div>
          <p className="font-bold text-center pt-[1rem]">Comentários:</p>
          {comments.map((comment, index) => (
            <div key={comment.id} className={`p-4 flex flex-col gap-1 ${index % 2 === 0 ? 'bg-[#242422]' : 'bg-[#4d4d4c]'}`}>
              <p><span className="font-semibold text-[#f2cc8f]">Nome:</span> {comment.name}</p>
              <p><span className='font-semibold text-[#f2cc8f]'>Email:</span> {comment.email}</p>
              <p><span className='font-semibold text-[#f2cc8f]'>Mensagem:</span> {comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>)
}

export default PostDetails