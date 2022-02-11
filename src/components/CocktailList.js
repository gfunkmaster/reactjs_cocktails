import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();

  if(loading) {
    return <Loading />
  }
  if(cocktails.length < 1) {
      // eslint-disable-next-line no-unused-expressions
     return  <h2 className='section-title'>
        No cocktails mathced your search criteria
      </h2>
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
