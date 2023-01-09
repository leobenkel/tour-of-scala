

import Skb from 'components/skb-page'

export const id = "curry"
const title = " Scala Curry"

const date = "2020-09-04T17:03:48"

const scastieId = "yOTTk60dS4W0xRVsPMejbg"

const mainInfoBox = <>
  <p>No, we are not talking about food here.</p>

<p>It is just a fancy way to talk about something simple. It describes the transformation of a method that takes several arguments into a series of function that each take one of those arguments. Simple? Try on the exercise.</p>
</>

const detailedInfoBox = <>
  <p>See? Simple. Some coding is worth a thousand words!</p>

<p>Writing the code that way has a few advantages.</p>

<p>
For instance, you can decompose the function into <i>partially applied functions</i>, like <code>add2</code> in the exercise. This example is simple, but imagine a complex function that takes a database connector and/or configurations. You could set those arguments, and then only reuse the <i>partially applied function</i> when needed, I like to call it a pre-configured operation. 
</p>

<p>
I also like using it for aesthetics, It allows to use <code>{ }</code>like in <code>r3</code> in the exercise. 
</p>

<p>And you can have as many arguments chained that way, As well as also combinations, for instance the first block could have 2 arguments and then 1 and then 3 arguments. Use it wisely depending on your needs.</p>
</>

const description = "Scala Knowledge Bits - Scala Curry - Periodic exercise to learn bits of knowledge about Scala. Scala Curry here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-curry/"

const prevUrl = "flatmap"
const nextUrl = "try"

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
 