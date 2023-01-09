

import Skb from 'components/skb-page'

export const id = "list-pattern-matching"
export const title = "Scala List pattern matching"

export const date = "2020-12-23T17:02:30"

const scastieId = "i7RNOt1qStGNACeNygqEwQ"

const mainInfoBox = <>
  <p>
Let’s see how <code>List</code> is used in the context of <i>pattern matching</i>.
</p>

<p>
This is a pre-requirement to talk about recursion later on.
</p>

</>

const detailedInfoBox = <>
  <p>
First we have to talk about how <code>List</code> can be created and modified.
</p>
<p>
Everything is immutable which is why we always create a new <code>List</code>, we don’t update the previous one.
</p>
<p>
A few new operator today:
</p>

<ul>

<li><code>Nil</code>: not really an operator, but it describe an empty list, it is a short cut for <code>List.empty[A]</code></li>

<li><code>::</code>: to add an element at the start of a <code>List</code>, which is why to create a <code>List</code> using this operator, we have to finish by <code>Nil</code>. We actually prepend element to an empty list.</li>

<li><code>+:</code>: to prepend an element to the <code>List</code>. Same as <code>::</code>.</li>

<li><code>:+</code>: to append an element at the end of a <code>List</code></li>
</ul>

<p>
If know that <code>+:</code> and <code>:+</code> can be confusing but you simply have to remember that <code>:</code> is towards the <code>List</code>.
</p>

<p><i>Pattern matching</i> now</p>

<p>Using the <code>::</code> we can extract head element(s) from the List.</p>

<p>
For instance, we can <code>case head :: tail =&gt; </code> to extract the first element of the list. We can also do <code>case a :: b :: tail =&gt;</code> to extract the two first element of the list. We can continue with as many as we would like.
</p>

<p>
Similarly to all the other <i>pattern matching</i> construct, we can add conditions to all those patterns. Either by adding <code>if</code> at the end or by replacing a value name by a literal value, for instance: <code>case 1 :: tail =&gt;</code> will match on any list that start by a <code>1</code>. And <code>case 1 :: Nil =&gt; </code> will match on a list containing one element being <code>1</code>.
</p>


</>

const description = "Scala Knowledge Bits - Scala List pattern matching - Periodic exercise to learn bits of knowledge about Scala. Scala List pattern matching here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-list-pattern-matching/"

const prevUrl = "option-pattern-matching"
const nextUrl = "list-of-option-flatten"

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
 