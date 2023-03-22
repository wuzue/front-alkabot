import Pagination from "./Pagination"
import Link from "next/link"
import { useEffect, useState } from "react"

export interface BlogPost{
  userId: number,
  id: number,
  title: string,
  body: string,
}

function Posts(){
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const postsPerPage = 6  

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
      })
      .catch(error => console.error(`error fetching posts: ${error}`))
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

  return(<>
    <div className="grid grid-cols-3 w-[70%] m-auto">
      {currentPosts.map(post => (
        <div key={post.id} className="p-[2rem] m-[1rem] rounded-[1.5rem] border-[1px] shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] flex flex-col relative">
          <div className="flex flex-col items-center m-auto">
            <p className="text-center mb-[1rem] font-bold">{post.title}</p>
            <p className="mb-[1rem]">{post.body}</p>
          </div>
        <div className="absolute bottom-3 right-5">
          <Link href={`/posts/${post.id}`}>
            Ler mais
          </Link>
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