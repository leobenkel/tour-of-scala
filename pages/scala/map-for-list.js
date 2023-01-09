

import Skb from 'components/skb-page'

export const id = "map-for-list"
const title = " Scala Map for List"

const date = "2020-07-29T17:00:13"

const scastieId = "mqPBMWVGR5OIpa1J9etlYw"

const mainInfoBox = <>
  <p>Ready for our first dive into Functional Programming? Don’t worry, we are going through this adventure together and I will make sure you don’t get lost.</p>
<p>This is the moment where you might hear about Monad, Monoid, Functors, but we are not doing any of that today. Today we are just learning about a function from the standard library called <code>map</code>. We can put fancy names on it later.</p>

</>

const detailedInfoBox = <>
  <p>You might have understood that <code>map</code> is actually just like a <code>for each</code> from other languages.</p><p>If you don’t know about it from other language, not to worry.</p>

<p><code>map</code> will just apply a function to each element of the list and return the list with the new values.</p>

<p>If you have a list of type <code>A</code> and you apply a function that transforms a type <code>A</code> to a type <code>B</code> then you will have an output being a list of type <code>B</code>.

</p><p>That’s it ! You did well for a first dive into Functional Programming. In upcoming SKBs we will go deeper into this aspect of Scala.</p>
</>

const description = "Scala Knowledge Bits - Scala Map for List - Periodic exercise to learn bits of knowledge about Scala. Scala Map for List here."

const canonical_url = "https://leobenkel.com/2020/07/skb-scala-map-for-list/"

const prevUrl = "val-lazy-def"
const nextUrl = "class-new"

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
 