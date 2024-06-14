import { useState } from 'react'

import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const positivePercentage = (good / all) * 100

  const props = { good, neutral, bad, all, positivePercentage }
  return (
    <main>
      <h2>give feedback</h2>
      <div>
        <Button handleClick={() => (setGood(good + 1))}>
          good
        </Button>
        <Button handleClick={() => (setNeutral(neutral + 1))}>
          neutral
        </Button>
        <Button handleClick={() => (setBad(bad + 1))}>
          bad
        </Button>
      </div>
      <Statistics {...props} />
    </main>
  )
}

export default App
