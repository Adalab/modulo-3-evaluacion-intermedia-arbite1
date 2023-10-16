
import { useState } from 'react'
import reactLogo from '../images/react.svg'
import '../styles/App.scss'
import { useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect (()=> {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flag,continents,cca2')
    .then((response) => response.json())
    .then ((data) =>{
      setCountries(data)

    })
  },[])
 
  const renderCountries = ()=> {
    return countries.map((eachCountry, i) =>
    (<li className='listContries__item' key={i}>
      <p>Name: {eachCountry.name.common}</p>
      <p>Capital: {eachCountry.capital}</p>
      <p>Flag: {eachCountry.flag}</p>
      <p>Continent: {eachCountry.continents}</p>
    </li>

    ))
  }

  return (
    <>
   <header>
    <h1>Country Info App</h1>
    <ul>{renderCountries()}</ul>
   </header>
   </>
  )
}

export default App
