import Skb from 'components/skb-page'


export const id = "set"
export const title = "Scala Set"

export const date = "2020-09-16T17:00:06"

const scastieId = "Xnga8KMIQimJPP8BwT5VAQ"

const mainInfoBox = <>
  <p>
    We saw other data structures in previous SKB like <code>List</code> or <code>Map</code>.
  </p>
  <p>
    Let's look at <code>Set</code>.
  </p>
</>

const detailedInfoBox = <>
  <p>
    Did you notice that <code>Set</code> cannot contain duplicate values? A <code>Set</code> is a list of unique values.
  </p>
  <p>
    When you combine the two <code>Set</code>, it removes the duplicated values and only keep one of each.
  </p>
  <p>
    One thing to know is that <code>Set</code> do not guarantee consistant ordering. You should not rely on index of the elements. If you want to learn more, you can read <a href="https://stackoverflow.com/a/5246204/3357831" target="_blank">this great answer on Stackoverflow</a>.
  </p>
  <p>
    Last thing about <code>Set</code> is that it has all the same function as <code>List</code> such as <code>map</code>, <code>flatMap</code>, <code>filter</code>, etc…
  </p>


</>

const description = "Scala Knowledge Bits - Scala Set - Periodic exercise to learn bits of knowledge about Scala. Scala Set here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-set/"

const prevUrl = "main"
const nextUrl = "defined-type"

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
