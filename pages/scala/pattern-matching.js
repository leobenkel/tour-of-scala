

import Skb from 'components/skb-page'

export const id = "pattern-matching"
const title = " Scala pattern matching"

const date = "2020-09-21T17:00:55"

const scastieId = "5VQri4WFQ6yrPuBJHNIh5A"

const mainInfoBox = <>
  <p>We are going to learn about <i>pattern matching</i> today. At least, an introduction. Pattern matching is one of the key functionality of scala and it contributes to help you write clean and readable code.</p>
</>

const detailedInfoBox = <>
  <p>The main keyword to use <i>pattern matching</i> is <code>match</code>. But as you saw, you can also use it inside <code>map</code>, as well as <code>flatMap</code> and <code>filter</code> and more.</p>

<p>The overall syntax is: 

</p><pre>value match {
    case holder =&gt; action
    case _ =&gt; default case
}
</pre>
And similar inside a <code>map</code> or other: 

<pre>list.map {
    case holder =&gt; action
    case _ =&gt; default case
}
</pre>
<p></p>

<p>
It works kind of like a <code>switch</code> in other languages. And similar to <code>switch</code>, the <code>case</code> are evaluated in order, the first one that evaluate to true will be executed and none of the other ones will be.
</p>

<p>There are plenty of ways that <i>pattern matching</i> can be used and we only saw a few here, let’s review:

</p><ul>
<li>catch all: <code>case n =&gt; ???</code></li>
<li>catch all without the value: <code>case _ =&gt; ???</code></li>
<li>With condition: <code>case n if n % 2 == 0 =&gt; ???</code></li>
<li>Exact match: <code>case 3 =&gt; ???</code> or <code>case "abc" =&gt; ???</code></li>
<li>List extraction: 
<ul>
<li>Empty list: <code>case Nil =&gt; ???</code></li>
<li>Extract head: <code>case head :: tail =&gt; ???</code></li>
<li>One element: <code>case head :: Nil =&gt; ???</code></li>
<li>Two elements: <code>case first :: second :: Nil =&gt; ???</code></li>
<li>One element with condition: <code>case head :: Nil if head % 2 == 0 =&gt; ???</code></li>
<li>Extract value: <code>case 12 :: tail =&gt; ???</code></li>
</ul>
</li>
<li>With types: <code>case n: String =&gt; ???</code></li>
<li>Case classes: (there will be an SKB about it)
<ul>
<li>Extraction of field: <code>case Person(firstName, lastName) =&gt; ???</code></li>
<li>Extraction of field with condition: <code>case Person(firstName, lastName) if firstName.startsWith("L") =&gt; ???</code></li>
<li>Extraction of field with exact match: <code>case Person("Leo", lastName) =&gt; ???</code></li>
</ul>
</li>
<li>With regex: There will be an SKB about it</li>
<li>With Scala version of enumeration: There will be an SKB about it</li>
</ul>
I might have forgotten some. If so, please let me know in the comment below or on our discord server.
<p></p>
</>

const description = "Scala Knowledge Bits - Scala pattern matching - Periodic exercise to learn bits of knowledge about Scala. Scala pattern matching here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-pattern-matching/"

const prevUrl = "defined-type"
const nextUrl = "foldleft"

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
 