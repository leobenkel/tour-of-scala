

import Skb from 'components/skb-page'

export const id = "for-comprehension"
const title = " Scala for-comprehension"

const date = "2020-09-28T17:00:25"

const scastieId = "Ghu5hkwTQsyazXKdcNujTw"

const mainInfoBox = <>
  <p>Using a lot of <code>map</code> and <code>flatMap</code> can make the code very hard to read as it goes into deep functions of functions.</p>

<p>Scala has a way of handling those cases. It is called a <i>for-comprehension</i>.</p>
</>

const detailedInfoBox = <>
  <p>
A <i>for-comprehension</i> allow you to chain <code>map</code> and <code>flatMap</code> together in an easy to read form.
</p>

<p>
For instance, those two snippets of code are equivalent:
</p><pre>for { n &lt;- list } yield { n + 1 }
</pre>
and
<pre>list.map( n =&gt; n + 1 )
</pre>
<p></p>

<p>
You can also filter the input using <i>for-comprehension</i>.
</p><pre>for {
    n &lt;- list
   if n == 2
} yield {
  n
}
</pre>
This snippet is equivalent to:
<pre>input.withFilter(n =&gt; n == 2)
</pre>
<p></p>

<p>
In general, everything you can do with <i>pattern matching</i>, you can do within a <i>for-comprehension</i>. 
The left side of the <code>&lt;-</code> behave similar to a <i>pattern matching</i>.
</p>

<p>
Sometimes, it can be hard to convert in your head back and forth between <i>for-comprehension</i> and <code>map</code> and <code>flatMap</code> modes. Some IDEs, such as IntelliJ, starting with version 2020, allows you to de-sugar the code and convert the <i>for-comprehension</i> into<code>map</code> and <code>flatMap</code>.
</p>

</>

const description = "Scala Knowledge Bits - Scala for-comprehension - Periodic exercise to learn bits of knowledge about Scala. Scala for-comprehension here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-for-comprehension/"

const prevUrl = "stream"
const nextUrl = "implicit-class"

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
 