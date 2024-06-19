import CountriesList from './countries-list'
import Country from './country'

export default function Countries ({ countries }) {
  return (
    <section>
      {countries.length === 1 && (
        <Country country={countries[0]}/>
      )}
      {countries.length > 1 && countries.length <= 10 && (
        <CountriesList countries={countries}/>
      )}
      {countries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
    </section>
  )
}
