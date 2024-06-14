export default function Total ({ parts }) {
  const count = parts.reduce((acc, part) => acc + part.exercise, 0)
  return (
    <p>Number of exercises {count}</p>
  )
}
