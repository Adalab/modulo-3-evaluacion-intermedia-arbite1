
import { useState } from 'react'
import reactLogo from '../images/react.svg'
import '../styles/App.scss'
import { useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect (()=> {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flag,continents')
    .then((response) => response.json())
    .then ((data) =>{
      setCountries(data)
    })
  },[])
 
  const renderCountries = ()=> {
    return countries.map((eachCountry, i) =>
    (<li>
      <p>Name: {eachCountry.name}</p>
      <p>Capital:{eachCountry.capital}</p>
      <p>Flag:</p>
      <p>Continent:</p>
    </li>

    ))
  }

  return (
    <>
   <header>
    <h1>Country Info App</h1>
   </header>
   </>
  )
}

export default App
