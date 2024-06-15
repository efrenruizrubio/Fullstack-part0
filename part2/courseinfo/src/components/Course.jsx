import { Content, Header } from './index'

export default function Course ({ course: { id, name, parts } }) {
  return (
    <section>
      <Header name={name} />
      <Content parts={parts} />
    </section>
  )
}
