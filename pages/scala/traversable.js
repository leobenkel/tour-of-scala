

import Skb from 'components/skb-page'

export const id = "traversable"
const title = " Scala Traversable"

const date = "2021-01-13T17:00:07"

const scastieId = "ntaMRDzYQ3uMMgXbQZcECg"

const mainInfoBox = <>
  <p>Going a bit further in Functional Programming concepts with <i>Traversable</i></p>

<p>
We already saw a few concepts so far such as <code>Functor</code> and <code>Applicative</code>.<br>Let’s dig deeper !
</p>
</>

const detailedInfoBox = <>
  <p><i>Traversable</i> solves a specific problem. How to apply an operation to many inputs at once without leaving the “Box/Container/F” ?</p>

<p>
Without <i>Traversable</i>, we would have to perform something like this:
</p>

<pre>val input: List[Int] = List(1,2,3)
val operation: Int =&gt; F[Int] = ???

val output: List[F[Int]] = input.map( i =&gt; operation(i))
</pre>

<p>
But how do we manage to get <code>F[List[A]]</code> instead of <code>List[F[A]]</code> ? Traversable !
</p>

<p>
To implement <code>traverse</code> we re-use what we built in the previous episodes: <code>Functor</code> and <code>Applicative</code>. So we can chain the operation and wrap into <code>F</code>. 
</p>

<p>
With <code>traverse</code> which allows you to apply an operation to many element and stay inside <code>F</code>, we also get for free <code>sequence</code> which allow you to flip <code>List[F[A]]</code> inside out into <code>F[List[A]]</code>. You will see it in <code>Future.sequence</code> for instance that is very convenient to wait or combine many <code>Future</code> together.
</p>

<p>
As a note: <code>input.map(f).sequence</code> is the same as <code>input.traverse(f)</code>.
</p>
</>

const description = "Scala Knowledge Bits - Scala Traversable - Periodic exercise to learn bits of knowledge about Scala. Scala Traversable here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-traversable/"

const prevUrl = "covariance"
const nextUrl = "typeclass"

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
 