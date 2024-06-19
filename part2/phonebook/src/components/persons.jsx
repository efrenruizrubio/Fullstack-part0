export default function Persons({ data, handleDelete }) {
  return (
    <>
      {data && data.map(({id, name, number}) => (
        <div key={id}>
          <span>{name} {number}</span>
          {' '}
          <button onClick={() => handleDelete(name, id)}>delete</button>
          <br />
        </div>
      ))}
    </>
  )
}