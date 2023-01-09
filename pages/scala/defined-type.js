

import Skb from 'components/skb-page'

export const id = "defined-type"
const title = " Scala defined type"

const date = "2020-09-18T17:00:29"

const scastieId = "MBpSt9KLQECIxOPK8Phaeg"

const mainInfoBox = <>
  <p>Let’s make our own type!</p>
</>

const detailedInfoBox = <>
  <p>You saw how to parameterize the entire code.</p>
<p>Try change <code>MyType</code> from <code>Int</code> to <code>String</code>.</p>
<p>This seem simple but it is a building block required to understand generic type later.</p>
<p>If you want to start now, try to replace <code>MyType</code> by the following code:

</p><pre>type SubType = Int
type MyType = List[SubType]
</pre>

Do you see how you can combine types together ? Like Lego !<p></p>

<p><code>List</code> can be parameterized, we used it with <code>Int</code> and <code>String</code> in the past, but you can use any type you want.</p>
</>

const description = "Scala Knowledge Bits - Scala defined type - Periodic exercise to learn bits of knowledge about Scala. Scala defined type here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-defined-type/"

const prevUrl = "set"
const nextUrl = "pattern-matching"

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
 