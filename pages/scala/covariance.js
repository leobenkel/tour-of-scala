

import Skb from 'components/skb-page'

export const id = "covariance"
export const title = "Scala Covariance"

export const date = "2021-01-11T17:00:00"

const scastieId = "iFi9nYjrT7OfSifQngJZlw"

const mainInfoBox = <>
  <p>Let’s see what is <i>Covariance</i>.</p>

<p>We are going to learn what it is and when to use it.</p>
</>

const detailedInfoBox = <>
  <p>
So, what is variance ? This is a concept related to types and how they are connected to each other. It is about inheritance. We saw before the relationship between a parent class and a child class. In functional programming we also talk about <i>sub-type</i>.
</p>

<p>
You can see in the start of the exercise what we encountered before related to parent and child class with inheritance.
</p>

<p>
Then we use a “normal” generic class without the covariance. You see that using a <code>F[A]</code> as a <code>F[B]</code> do not with and you are getting <code>type mismatch</code> with some explanation : <code>found F[A] , required F[B]</code>. This is expected, the types are different even tho they share a common parent, they are different. 
</p>
<p>
However, why couldn’t you use a <code>F[A]</code> as a <code>F[P]</code> if <code>P</code> is the parent of <code>A</code> ? This time the error is a lot more detailed: 
</p>

<pre>type mismatch;
 found   : F[A]
 required: F[P]
Note: A &lt;: P, but trait F is invariant in type A.
You may wish to define A as +A instead. (SLS 4.5)
</pre>

<p>
We recognize one symbol we saw before: <code>&lt;:</code> which talks about the relationship between the two types.
</p>

<p>
In the last part of the exercise you make a covariant trait using the syntax:
</p>

<pre>trait MyTrait[+A]
</pre>

<p>
The <code>+A</code> means that the trait is now <i>covariant</i> for <code>A</code>.
</p>

<p>
And now, what was failing before is working. We are able to use <code>F[A]</code> as <code>F[P]</code>.
</p>

<p>
Hope that was of help to understand what the <code>+A</code> means when you encounter it and how to solve some exception you might have seen ! See you next time.</p>
</>

const description = "Scala Knowledge Bits - Scala Covariance - Periodic exercise to learn bits of knowledge about Scala. Scala Covariance here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-covariance/"

const prevUrl = "applicative"
const nextUrl = "traversable"

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
 