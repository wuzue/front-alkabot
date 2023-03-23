import Pagination from "./Pagination"
import Link from "next/link"
import { useEffect, useState } from "react"

// TODO:
// WHEN WE OPEN THE BLOG POST IN A NEW TAB, THE ID GETS UNDEFINED
// URL/POSTS/UNDEFINED
//WHEN WE OPEN IN THE SAME TAB AS HOME (/), IT WORKS PROPERLY

export interface BlogPost{
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface Comentarios{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

function Posts(){
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const postsPerPage = 6
  const [user, setUser] = useState<any>()

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setTotalPosts(data.length)
        setHasMore(data.length === postsPerPage)
        const randomUserId = Math.floor(Math.random() * 10) + 1
        fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
          .then(res => res.json())
          .then(user => setUser(user))
          .catch(error => console.error(error))
      })
      .catch(error => console.error(`error fetching posts: ${error}`))
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

  return(<>

    <div className="flex flex-col w-[50%] m-auto">

      {currentPosts.map(post => (
        
        <div key={post.id} className="p-[2rem] m-[1rem] flex flex-col relative">
          <div className="flex flex-col">
            <p className="capitalize text-left mb-[1rem] text-[2rem]">{post.title}</p>
            <p className="mb-[1rem] font-semibold">Author: {user && user.name}</p>
            <p className="text-[1.25rem] mb-[1rem]">{post.body}</p>
          </div>
        <div className="absolute bottom-3 right-8">
          <Link href={`/posts/${post.id}`}>Ler mais</Link>
          {/* <p className="text-right font-bold">Ler mais</p> */}
        </div>
        </div>
      ))}

      <div id='pagination' className="flex justify-center mt-[1rem]">
        {currentPage === 1 ? null : <button className='pr-[.5rem] text-[blue] font-[500]' onClick={previousPage}>Previous Page</button>}
        <p className='font-bold text-[1.1rem] border-[1px] border-gray-500 rounded-[10px] w-[1.5rem] shadow-[0px_8px_24px_rgb(0,0,0,12%)]'><span className='flex justify-center'>{currentPage}</span></p>
        <button className='pl-[.5rem] text-[blue] font-[500]' onClick={nextPage}>Next Page</button>
      </div>
    </div>
  </>)
}

export default Posts