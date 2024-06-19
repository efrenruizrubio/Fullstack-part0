export default function Search ({ value, handleValue }) {
  return (
    <div>
      <span>find countries</span>
      <input
        type="text"
        value={value}
        onChange={handleValue}
      />
    </div>
  )
}
