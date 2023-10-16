
import { useState } from 'react'
import '../styles/App.scss'
import { useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flag,continents,cca2')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)

      })
  }, [])

  const handleForm = (ev) => {
    ev.preventDefault()
  }

  const handleInputSearch = (ev) => {
    setSearchCountries(ev.target.value);
  };


  const renderCountries = () => {
    return countries
      .filter((eachCountry) =>
        eachCountry.name.toLowerCase().includes(searchCountries.toLocaleLowerCase())
      )
      .map((eachCountry, i) =>
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
        <p>Explore information about countries, capitals, and flags. Add new countries and filter trough the list</p>
      </header>
      <main>
        <form onSubmit={handleForm}>
          <input
            type="text"
            id="countrySearch"
            placeholder="Buscar por nombre de país"
            value={searchCountries}
            onChange={handleInputSearch}

          />
          <label htmlFor="">By Continent</label>
          <select id="continentSelect">
            <option value="all">Todos los continentes</option>
            <option value="Africa">África</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
            <option value="northAmerica">North America</option>
            <option value="southAmerica">South America</option>

          </select>


        </form>



        <ul>{renderCountries()}</ul>
      </main>

    </>
  )
}

export default App
