import React from 'react'
import {  useGlobalContext } from './1.Context'

const Search = () => {
  const{searc,setSearc,err}=useGlobalContext();
  return (
    <>
    <section className='search-section'>
      <h2>Search here</h2>
      <form action='#' onSubmit={(e)=>e.preventDefault()}>
          <input type='text' value={searc} onChange={(e)=>setSearc(e.target.value)}/>
      </form>
      <div className='card-error'>
        <p>{err.show && err.msg}</p>
      </div>
    </section>
    </>
  )
}

export default Search