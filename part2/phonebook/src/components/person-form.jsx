export default function PersonForm({ addPerson, name, handleName, number, handleNumber }) {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={name} onChange={handleName }/>
      </div>
      <div>
        number: <input value={number} onChange={ handleNumber }/>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}