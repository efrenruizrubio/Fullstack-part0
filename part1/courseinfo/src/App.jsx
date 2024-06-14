import { Header, Content, Total } from './components/'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { part: 'Fundamentals of React', exercise: 10 },
      { part: 'Using props to pass data', exercise: 7 },
      { part: 'State of a component', exercise: 14 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
