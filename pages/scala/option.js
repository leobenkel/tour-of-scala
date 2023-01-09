

import Skb from 'components/skb-page'

export const id = "option"
export const title = "Scala Option"

export const date = "2020-07-24T17:02:54"

const scastieId = "77OEvedmT6KHssXPBduEIw"

const mainInfoBox = <>
  <p><code>Option</code> is the way in Scala to handle <code>null</code>.
</p>
<p>It allows to encapsulate the concept of “<i>is this value defined</i>” or “<i>does this variable contains a value</i>“.</p>
</>

const detailedInfoBox = <>
  <p>You might have guessed it on your own but the <code>isDefined</code> method will return <code>true</code> when the <code>Option</code> contains a value, and <code>isEmpty</code> returns <code>true</code> when the <code>Option</code> contains nothing.</p>
<p>We are going to learn, in later SKB, about<code>pattern matching</code> and <code>map</code>. It will allow us to modify the value contained in the <code>Option</code>.</p>
</>

const description = "Scala Knowledge Bits - Scala Option - Periodic exercise to learn bits of knowledge about Scala. Scala Option here."

const canonical_url = "https://leobenkel.com/2020/07/skb-scala-option/"

const prevUrl = "list-sum-method"
const nextUrl = "val-lazy-def"

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
 