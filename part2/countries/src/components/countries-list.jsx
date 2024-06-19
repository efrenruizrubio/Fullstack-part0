import { useState } from 'react'

import Country from './country'

export default function CountriesList ({ countries }) {
  const [showCountryArray, setShowCountryArray] = useState(Array.from({ length: countries.length }, () => false))

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {countries.map(({ name: { common } }, index) => {
        const country = countries[index]
        const showCountry = showCountryArray[index]
        return (
          <li key={common}>
            <span>
              {common}
              <button
                onClick={() => setShowCountryArray((prev) => {
                  const copy = [...prev]
                  copy[index] = !prev[index]
                  return copy
                })}
              >
                {!showCountry ? 'show' : 'hide'}
              </button>
            </span>
            {showCountry && (
              <Country country={country}/>
            )}
          </li>
        )
      })}
    </ul>
  )
}
