

import Skb from 'components/skb-page'

export const id = "comparators"
export const title = "Scala Comparators"

export const date = "2020-08-03T17:01:36"

const scastieId = "5MhccpxLQiSzOQ8CWjqjwQ"

const mainInfoBox = <>
  <p>A few new concepts are needed for this SKB.</p>
<p>First, what is a <code>Boolean</code>? A <code>Boolean</code> can only take two values: <code>true</code> or <code>false</code>. It is the result of a mathematical question. For instance, is 2 less than 5 (<code>2 &lt; 5</code>), it would returns "yes" (<code>true</code>).</p>
<p>And from previous SKB, you might have noticed that <code>assert</code> tests if what is inside is <code>true</code>.</p>


</>

const detailedInfoBox = <>
  <p>In Scala, and in the majority of other programming languages, you have a series of built-in comparators for mathematics:</p>
<p>
</p><ul>

<li><code>==</code> : for equality. Some tips here: <ul>
<li>Notice that there are two <code>==</code>. With only one <code>=</code>, it would be an assignation (Like in: <code>val a = 2</code>).</li>
<li>In your projects as a software engineer, always be careful about comparing numbers with decimals (Like <code>1.5632426546</code>, they are called <code>Double</code> or <code>Float</code>) because the computer will round those numbers. So instead of <code>a == b</code>, you should be doing something like: <code>Math.abs(a - b) &lt; 0.01</code>.</li>
</ul></li>

<li><code>!=</code> : Not equal</li>
<li><code>&gt;</code> : Greater than</li>
<li><code>&lt;</code> : Less than</li>
<li><code>&gt;=</code> : Greater than or equal</li>
<li><code>&lt;=</code> : Less than or equal</li>

</ul>
<p></p>
</>

const description = "Scala Knowledge Bits - Scala Comparators - Periodic exercise to learn bits of knowledge about Scala. Scala Comparators here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-comparators/"

const prevUrl = "class-new"
const nextUrl = "list-filter-method"

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
 