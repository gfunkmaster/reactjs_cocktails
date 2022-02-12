import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

// fetch with asyc
const fetchDrinks = async () => {
  setLoading(true) // when we want to fetch it's alwas true 

  // try for cocktails
  try {
    
    const response = await fetch(`${url}${searchTerm}`)
    const data = await response.json();
    console.log(data);
    const {drinks} = data;
    if(drinks) {
      const newCocktails = drinks.map((item) => { //iterate through drinks 
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item; //destructing 
        return {id: idDrink, name : strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass } //renaming when we send
      })
      setCocktails(newCocktails); // we return the newCocktials

    } else {
      setCocktails([]);
    }
    setLoading(false); 
    
  } catch (error) { 
    console.log(error);
    setLoading(false);
  }

}

//invoking the function 
useEffect(() => {

  fetchDrinks();

},[searchTerm])

return (
  <AppContext.Provider
    value={{ loading, cocktails, searchTerm, setSearchTerm }}
  >
    {children}
  </AppContext.Provider>
)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
