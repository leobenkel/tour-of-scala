

import Skb from 'components/skb-page'

export const id = "option-map"
const title = " Scala Option map"

const date = "2020-08-21T17:00:44"

const scastieId = "Zn7rGMlnSVWfCH3hCnKEhA"

const mainInfoBox = <>
  <p>If you followed along, you might remember <code>map</code> from the <code>List</code>. In Scala, and in functional programming, you are going to hear about <code>map</code> a whole bunch.</p>

<p><code>map</code> comes from the functional programming world, and from category theory in mathematics. We are going to dive deeper into those two concepts in the future but for now let’s focus only on the <code>map</code> method.</p>

<p>Just to throw it out there, but don’t get hang on it too much, <code>map</code> is part of what is called a <code>functor</code>.</p>

<p>Can you feel that the “m” word is going to show up soon ? Should we pop the bubble now ?</p>
<p>Let’s rip off the bandage, right now. <strong>MONAD</strong> !</p>

<p>That’s it, we said it. There is no turning back now. Good luck !</p>
</>

const detailedInfoBox = <>
  <p>
Have you recovered from the m-encounter ? Using the <code>map</code> wasn’t too bad, was it? And you used it before with the <code>List</code>.
</p>

<p>
There are few things to try to modify in this exercise. Go ahead and try those:
</p><ul>
<li>What happen when <code>input</code> is set to <code>None</code>?</li>

<li>What happen if you replace <code>getOrElse</code> by <code>get</code> ? with <code>Some</code> and with <code>None</code>.</li>

<li>
You might have written something like <code>.map(a =&gt; a + 1)</code> in your solution, try replacing <code>a =&gt; a</code> by <code>_</code>. This is some teasing for some upcoming SKB.
</li>

</ul>
<p></p>
</>

const description = "Scala Knowledge Bits - Scala Option map - Periodic exercise to learn bits of knowledge about Scala. Scala Option map here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-option-map/"

const prevUrl = "apply"
const nextUrl = "list-flatten"

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
 