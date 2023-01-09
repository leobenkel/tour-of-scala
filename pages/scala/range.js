import Skb from 'components/skb-page'


export const id = "range"
export const title = "Scala Range"

export const date = "2020-09-09T17:06:05"

const scastieId = "3mkgQBbsRAKu0Yqo3tzoxA"

const mainInfoBox = <>
  <p>I can't believe we haven't seen <code>Range</code> yet !</p>
</>

const detailedInfoBox = <>
  <p>Super easy ! Right ? And so useful and powerful.</p>

  <p>Summary of the keywords:</p><p>

  </p><ul>

    <li><code>to</code>: When you do <code>0 to 3</code>, you will get the numbers <code>0, 1, 2, 3</code>. Notice that the end boundary <strong>is included</strong>.</li>

    <li><code>until</code>: When you do <code>0 until 3</code>, you will get the numbers <code>0, 1, 2</code>. Notice that the end boundary <strong>is not included</strong>.</li>

    <li><code>by</code>: When you do <code>0 to 11 by 3</code>, you will get the numbers <code>0, 3, 6, 9</code>. The default value is <code>by 1</code>.</li>

  </ul>

</>

const description = "Scala Knowledge Bits - Scala Range - Periodic exercise to learn bits of knowledge about Scala. Scala Range here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-range/"

const prevUrl = "try"
const nextUrl = "list-parallel"

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
