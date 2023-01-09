

export const id = "extractor-pattern"
const title = " Scala extractor pattern"

const date = "2021-01-01T17:00:40"

const scastieId = "m2wkxempSUqHNni7KEz1Zg"

const mainInfoBox = <>
  <p>
Today we are going to combine several things we know to learn about <i>extractor pattern</i>.
</p>

<p>
It might be a bit complicated but I am sure you are going to be fine !
</p>
</>

const detailedInfoBox = <>
  <p>
The goal here is to be able to only keep the element of the <code>List</code> that are of a given type.
</p>


<p>
We start from a list of type A : <code>List[A]</code>. And we want to keep the element of type B, with B being the child class of A. We saw few exercise ago the syntax : <code>B &lt;: A</code>. 
</p>

<p>
We also saw the <code>implicit</code> proof using the syntax: <code>A : PROOF</code>. In this case we want <code>B</code> to be a <code>ClassTag</code> as well as being a child of <code>A</code>. Which is why we now have this syntax: <code>B &lt;: A: ClassTag</code>.
</p>

<p>
Have you tried removing the <code>ClassTag</code> ? You are seeing a <code>Warning</code> talking about <code>abstract type B is unchecked since it is eliminated by erasure</code>. We are going to dive deeper into this in another episode. But for now, you only need to know that to mitigate the "type erasure" problem, we need to introduce a proof to be <code>ClassTag</code>. 
</p>

<p>
Now that we have our extractor, we can filter down the <code>List[Animal]</code> to only keep the <code>Cat</code> or the <code>Dog</code> !
</p>

<p>
I am sure you are going to need this pattern in one of your project one day ! Just let us know on the Discord server how that has been useful to you !
</p>
</>

const description = "Scala Knowledge Bits - Scala extractor pattern - Periodic exercise to learn bits of knowledge about Scala. Scala extractor pattern here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-extractor-pattern/"

const prevUrl = "literal-identifiers"
const nextUrl = "functor"

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
 