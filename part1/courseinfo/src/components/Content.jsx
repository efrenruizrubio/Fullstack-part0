import Part from './Part'

export default function Content ({ parts }) {
  const { part: part1, exercise: exercise1 } = parts[0]
  const { part: part2, exercise: exercise2 } = parts[1]
  const { part: part3, exercise: exercise3 } = parts[2]

  return (
    <div>
      <Part part={part1} exercise={exercise1}/>
      <Part part={part2} exercise={exercise2}/>
      <Part part={part3} exercise={exercise3}/>
    </div>
  )
}
