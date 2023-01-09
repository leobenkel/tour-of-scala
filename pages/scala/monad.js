

import Skb from 'components/skb-page'

export const id = "monad"
const title = " Scala Monad"

const date = "2021-01-18T17:00:24"

const scastieId = "JB0wl7zzQxiefAf4EwfzBA"

const mainInfoBox = <>
  <p>We have done a lot in those last months !</p>

<p>Today is the day <i>Monad</i> stops being scary.</p>
</>

const detailedInfoBox = <>
  <p>
We already learned about <i>Functor</i>, <i>Foldable</i>, <i>Applicative</i>, and <i>Traversable</i>.
</p>

<p>
We have almost encountered all the beast of Category Theory at this point. Today we are going to tackle <i>Monad</i>.
</p>

<p>
As you can see, it is simply a <i>Functor</i> and <i>Applicative</i>, with one extra feature: <code>flatten</code>. Which allows us to define the world famous <code>flatMap</code>. As you can see in the definition, <code>flatMap</code> is simply <code>map</code> followed by <code>flatten</code>.
</p>

<p>
When you look at the implementation, we only need a few concept defined: 
</p>

<ul>

<li><code>map</code>: which describe how to apply a transformation to the inner type <code>A</code> of the wrapper <code>F</code>.</li>
<li><code>pure</code>: which describe how to wrap a <code>A</code> into a  <code>F[A]</code> </li>
<li><code>flatten</code>: which describe how to compact <code>F[F[A]]</code> in to <code>F[A]</code></li>

</ul>

<p>
Those concepts are all that needed to enable complex behavior like <code>filter</code> or <code>flatMap</code>.
</p>

<p>
I also wanted to show off what we learned in the last episode about <code>TypeClasses</code> with the <code>implicit object</code> and the <code>implicit class</code> which allow us to give a shortcut for the function we want to use often. 
</p>

<p>
As always, if you have any questions, reach out on Discord !
</p>
</>

const description = "Scala Knowledge Bits - Scala Monad - Periodic exercise to learn bits of knowledge about Scala. Scala Monad here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-monad/"

const prevUrl = "typeclass"
const nextUrl = "null"

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
 