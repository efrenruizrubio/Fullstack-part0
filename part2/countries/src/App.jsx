import { useState, useEffect } from 'react'

import Search from './components/search'
import Countries from './components/countries'
import { getCountries } from './services/countries'

function App () {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getCountries()
      .then((res) => setCountries(res))
      .catch(() => setCountries(null))
  }, [])

  if (countries === null) {
    return (
    <div>
      <p>An error has occurred when trying to obtain the countries. Try again later</p>
    </div>
    )
  }

  const filteredCountries = countries.filter(({ name: { common } }) =>
    common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
    {countries.length
      ? (
      <div>
        <Search
          value={filter}
          handleValue={(e) => setFilter(e.target.value)}
        />
        <Countries countries={filteredCountries}/>
      </div>
        )
      : (
      <p>Loading data...</p>
        )}
    </>
  )
}

export default App
