

import Skb from 'components/skb-page'

export const id = "typeclass"
export const title = "Scala Typeclass"

export const date = "2021-01-15T17:02:53"

const scastieId = "UtjWBavyRMWd7mpfLiXlfQ"

const mainInfoBox = <>
  <p><i>Typeclasses</i> woooohh , sorry it is a bit late for scary Halloween words but here we are !</p>

<p>More seriously, we already saw all the components of what a <i>Typeclass</i> is but we haven’t formalized the word.</p>
</>

const detailedInfoBox = <>
  <p>We saw generic type before</p>

<p>And we learned about <code>implicit val</code> as well and how to use them.</p>
<p>I am just introducing <code>implicit object</code> while we are at it. But it works the exact same way.</p>


<p>So what are <i>Typeclasses</i> ? It is just a construct that involve a <code>trait</code>, <code>implicit</code> implementations and a function that leverage those <code>implicit</code> implementations</p>

<p>That’s it !</p>

<p>As always, we talked about it in the past, using <code>implicit</code> can be dangerous and hard to maintain. It is easy to forget where the implementation is and it can be hard to find it back depending on the IDE you are using. Also debugging can be tricky. Use it when it seems right !</p>
</>

const description = "Scala Knowledge Bits - Scala typeclass - Periodic exercise to learn bits of knowledge about Scala. Scala typeclass here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-typeclass/"

const prevUrl = "traversable"
const nextUrl = "monad"

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
 