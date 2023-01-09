

export const id = "functor"
const title = " Scala Functor"

const date = "2021-01-04T17:00:29"

const scastieId = "lPfrjWhhQUew9oxzlD0nSw"

const mainInfoBox = <>
  <p>
<i>Functional Programming</i> today !
</p>
<p>
And let’s start by the easiest one: <strong>Functor</strong>.
</p>
</>

const detailedInfoBox = <>
  <p>
You might have heard about <i>Monad</i>, <i>Monoid</i>, <i>Applicative</i>, etc… 
</p>
<p>
In this episode, we are focusing on the <i>Functor</i>. 
</p>
<p>
The formal definition for a <i>Functor</i> is a transformation from a category <code>A</code> to a category <code>B</code>. Such transformations are often represented by an arrow: <code>A -&gt; B</code>.
</p>

<p>
This transformation, in Scala, is translated to the method <code>map</code> that we have seen a lot in the past.
</p>

<p>
A <i>Functor</i> (<code>F</code>), in category theory, must follow several rules:
</p>
<ul>
<li>All element of <code>A</code> must have a result in <code>B</code></li>
<li>Identity:
<ul>
<li>
If we define <code>id</code>, the identity method: <code>id(a) == a</code>, 
</li>
<li>
then <code>id(F) == F.map(id)</code>.
</li>
</ul></li>

<li>Composition:
<ul>
<li>
If we define <code>f</code> and <code>g</code>, two methods, 
</li>
<li>
then <code>F.map(f).map(g) == F.map( g(f(_)) )</code>.
</li>
</ul></li>

</ul>

<p>
In the following episode, we are going to learn more about the other component of the category theory ecosystem and functional programming overall. 
</p>
</>

const description = "Scala Knowledge Bits - Scala Functor - Periodic exercise to learn bits of knowledge about Scala. Scala Functor here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-functor/"

const prevUrl = "extractor-pattern"
const nextUrl = "foldable"

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
 