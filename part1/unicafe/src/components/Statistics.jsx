import StatisticsLine from './StatisticsLine'

export default function Statistics ({ good, neutral, bad, all, positivePercentage }) {
  return (
    <section>
      <h2>statistics</h2>
      {good || neutral || bad
        ? (
        <>
          <table>
            <tbody>
              <StatisticsLine text='good' value={good}/>
              <StatisticsLine text='neutral' value={neutral}/>
              <StatisticsLine text='bad' value={bad}/>
              <StatisticsLine text='all' value={all}/>
              <StatisticsLine text='average' value={(good - bad) / (all || 1)}/>
              <StatisticsLine text='positive' value={`${positivePercentage || 0}%`}/>
            </tbody>
          </table>
        </>)
        : <p>No feedback given</p>}
    </section>
  )
}
