import Part from './Part'

export default function Content ({ parts }) {
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0)

  return (
    <div>
      {parts && parts.map(({ name, exercises, id }) =>
        <Part key={id} name={name} exercises={exercises} />
      )}
      <strong>total of {total} exercises</strong>
    </div>
  )
}
