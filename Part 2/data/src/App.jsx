import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Components/person'

const App = () => {
  const [value, setValue] = useState('')
  const [result, setResults] = useState({})
  const [country, setCountry] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect run, currency is now', country)

    // skip if currency is not defined
    if (country) {
      console.log('fetching exchange results...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
          setResults(response.data.result)
        })
    }
  }, [country])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(value)
  }

  const filtered = filter ? country.filter(country => 
    country.name.toLowerCase().includes(filter.toLowerCase()))
    :country 

  const handleFilter = (event)=>{
    setFilter(event.target.value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <ul>
        {filtered.map(countries => <Country  country={countries} />)}
      </ul>
    </div>
  )
}

export default App