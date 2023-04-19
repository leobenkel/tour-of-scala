import Skb from 'components/skb-page'


export const id = "apply"
export const title = "Scala apply"

export const date = "2020-08-19T17:03:28"

const scastieId = "oyx7X5uwQam2xG8ieQt2BQ"

const mainInfoBox = <>
  <p><code>apply</code> is a <i>magic</i> Scala method. There is no need to call <code>apply</code> explicitly to execute it. And this is part of the tool that the <code>case class</code> use.</p>
  <p>This SKB might be a bit longer than previous ones.</p>
</>

const detailedInfoBox = <>
  <p>
    <code>apply</code> can be called like any other method ( <code>Person.apply(...)</code> ) but it can be used without calling its name explicitely ( <code>Person(...)</code> ). And that's it.
  </p>

  <p>
    If you want to learn more, continue reading.
  </p>

  <p>In fact, you could implement a function yourself: </p>

  <pre>
    <p>val add = new Function2[Int, Int, Int] &#123;</p>

    <p>  def apply(a: Int, b: Int): Int = a + b</p>
    <p>&#125;</p>

    <p>val result = add(1, 2)</p>

    <p>assert(result == 3)</p>
  </pre>

  <p>Try and copy it above in the editor.</p>

  <p>You could also implement <code>if</code> yourself ! Try it by yourself before looking at Scastie.</p>

  <p>
    Solution: <a href="https://scastie.scala-lang.org/ZMltOxDQSQ2yusDiU6LNSg" target="_blank">Scastie (owFP4D18R6yjrDJoPLu7Bg) </a>
  </p>
</>

const description = "Scala Knowledge Bits - Scala apply - Periodic exercise to learn bits of knowledge about Scala. Scala apply here."

const prevUrl = "companion-objects"
const nextUrl = "option-map"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
