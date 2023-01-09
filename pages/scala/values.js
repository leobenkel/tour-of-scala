

import Skb from 'components/skb-page'

export const id = "values"
const title = " Scala Values"

const date = "2020-07-13T17:00:26"

const scastieId = "6EuSjLIMT7KQhdUiB7Nf8Q"

const mainInfoBox = <>
  <p>A variable can be considered in two parts. First its name, for instance <code>a</code> and then its value, for instance, <code>12</code>.</p><p>In Scala, a variable also has a type, for instance, <code>Int</code> when it is an integer.</p>
</>

const detailedInfoBox = <>
  <p>We assigned a value to the Value <code>a</code>.</p><ul><li>The line 3 is the value</li><li> The line 5 is doing a sum of the integer <code>2</code> and the value <code>a</code></li><li>
On line 7, we see <code>assert</code> which perform a test if the sum above is equal to <code>8</code></li></ul><p></p>
<p>Also, important things to keep in mind, <code>val</code> are immutable. In Scala, if you want a mutable variable, you would have to use the keyword <code>var</code>.</p>
</>

const description = "Scala Knowledge Bits - Scala Values - Periodic exercise to learn bits of knowledge about Scala. Scala Values here."

const canonical_url = "https://leobenkel.com/2020/07/skb-scala-values/"

const prevUrl = "null"
const nextUrl = "string-interpolation"

const pageData = {
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
 