export default function Persons({ data }) {
  return (
    <>
      {data && data.map(({name, number}) => (
        <div key={name}>
          <span>{name} {number}</span>
          <br />
        </div>
      ))}
    </>
  )
}