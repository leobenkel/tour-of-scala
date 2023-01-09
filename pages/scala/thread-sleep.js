

import Skb from 'components/skb-page'

export const id = "thread-sleep"
const title = " Scala Thread Sleep"

const date = "2020-08-28T17:04:15"

const scastieId = "W8rybNOdRk29mQwdFVjqNg"

const mainInfoBox = <>
  <p>
This seem like a simple thing but it will allow us to introduce the idea of <code>Thread</code>, which is a much more complex beast.
</p>

<p>
Thank you for <strong>iamkpr</strong> from our Discord channel for suggesting going toward asynchronous computation, threading and <code>Future</code>.
</p>
</>

const detailedInfoBox = <>
  <p>
A <code>thread</code> is a stream of computation. For instance, you would do:
</p> 

<pre>val c = a + b
val d = c * 2
</pre>

<p>Those two operations happen one at a time. There is no way for <code>d</code> to be computed before <code>c</code>, in this situation.</p>

<p>Now imagine that you want, for instance, retrieve some data somewhere from two different places. You could query those sources one at a time but most of the time it would be more efficient and faster to start requesting the data from both places so that we can collect the data from both places at once.</p>

<p>You might have heard of <i>multi-threading</i> maybe in the past. This means that the application is able to do more than one thing in parallel.</p>

<p>This SKB was not treating any of those topics about asynchronous operation and parallelization. However, it gaves you a taste of what it is like to have an operation that takes time. The method <code>Thread.sleep(  )</code> allows you to pause the current <code>thread</code> for a number of milliseconds.</p>

<p>When you work on real life projects, time is a very important factor. And being able to leverage threads to run several things at once is extremely important. But don’t panic, we are going to slowly approach the problem, one SKB at a time.</p>
</>

const description = "Scala Knowledge Bits - Scala Thread Sleep - Periodic exercise to learn bits of knowledge about Scala. Scala Scala Thread Sleep here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-thread-sleep/"

const prevUrl = "tuple"
const nextUrl = "random"

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
 