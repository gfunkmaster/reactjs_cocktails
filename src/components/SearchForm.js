import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext(); //getting the 
  const searchValue = React.useRef(''); // getting tht useRefs
  React.useEffect(() => {
searchValue.current.focus(); //to acces our ref, we use current
  }, [])

  //we use searchCocktail, in setSearchTerm we call our ref, searchValue.current.value
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value); 
  }

  const handleSubmit = (e) => {
    e.preventDefualt();
  }
  return (
    <section className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
        {/* ref = searchValue, we use input */}
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail} /> 
        </div>
      </form>
    </section>
  )
}

export default SearchForm
