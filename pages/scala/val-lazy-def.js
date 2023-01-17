import Skb from 'components/skb-page'


export const id = "val-lazy-def"
export const title = "Scala difference between val, lazy val and def"

export const date = "2020-07-27T17:01:27"

const scastieId = "fRqDtrL9Q22S2aB2Pue9mg"

const mainInfoBox = <>
  <p>We have seen <code>val</code> and <code>def</code> in previous SKBs but we haven't encountered the keyword <code>lazy</code> before.</p>
  <p>Try to figure out by yourself what <code>lazy</code> does. Make sure to read the print statements in the console as you run the code.</p>

</>

const detailedInfoBox = <>
  <p>Did you figure it out ?</p>

  <p>The keyword <code>lazy</code> allows a value to not be evaluated until the very first time it is called. If you call the value again, the previously computed value will be used.</p>
  <p>With <code>val</code> the value is computed instantly as the value is declared. You were able to see the print statement early in the log, before all the others.</p>
  <p>And for <code>def</code>, this is a method, so each time you call the method, you are recomputing the result.</p>

  <p>Summary: </p><ul>
    <li><code>val</code>: Computed once when declared</li>
    <li><code>lazy val</code>: Computed once when called</li>
    <li><code>def</code>: Computed each time it is called</li>
  </ul><p></p>
</>

const description = "Scala Knowledge Bits - Scala difference between val, lazy val and def - Periodic exercise to learn bits of knowledge about Scala. Scala difference between val, lazy val and def here."

const canonical_url = "https://leobenkel.com/2020/07/skb-scala-val-lazy-def/"

const prevUrl = "option"
const nextUrl = "map-for-list"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  canonical_url,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
