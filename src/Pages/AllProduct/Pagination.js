import React from 'react'

const Pagination = ({postPerPage, totalPost}) => {
    const pageNumbers = []

    for(let i= 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li>
                <a href="#">{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
