export default function Country ({ country }) {
  const {
    name: {
      common
    },
    capital,
    area,
    languages,
    flags: {
      svg,
      alt
    }
  } = country

  console.log(country)
  return (
    <article>
      <h2>{common}</h2>
      <span>capital {capital}</span>
      <br />
      <span>area {area}</span>
      <br />
      <p><strong>languages: </strong></p>
      <ul>
        {Object.values(languages).map((lang) =>
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <img
        width={200}
        height={200}
        src={svg}
        alt={alt}
      />
    </article>
  )
}
