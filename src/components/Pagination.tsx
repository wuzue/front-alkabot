const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []
  for(let i = 1; i < Math.ceil(totalPosts / postsPerPage) i++){
    pageNumbers.push(i)
  }
  return(<>
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)} className={`page-link ${currentPage === number ? 'active' : ''}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </>)
}

export default Pagination