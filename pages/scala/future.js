

import Skb from 'components/skb-page'

export const id = "future"
export const title = "Scala Future"

export const date = "2020-10-07T17:00:24"

const scastieId = "JkqgIleTS6Sb5Ies2jAKvw"

const mainInfoBox = <>
  <p>Finally diving into <i>asynchronous</i> standard library !</p>
<p>Talking about <code>Future</code>, the good and the bad.</p>

</>

const detailedInfoBox = <>
  <p>Lots going on here but hopefully the comments helped breaking it down into bits size knowledge.</p>

<p>First of all, to use <code>Future</code>, you have to define an <code>ExecutionContext</code>. There are plenty of ways to do it but to stay simple, we are going to be using the default <code>global</code> one.</p>

<p>Then, let’s start with the first part. In this part, we are discovering <code>Future</code>. Simply create then using <code>Future { ... }</code> and you can have any code in there. The return type will be <code>Future[A]</code>, where <code>A</code> is the return type of what is inside the <code>{ }</code>.</p>

<p>You can chain futures together using <i>for-comprehension</i>, like we saw in previous episode. As well as the traditional <code>map</code>, <code>flatMap</code>, etc…</p>

<p>We are already encountering one danger to know about <code>Future</code>: they start as soon as they are created. Also, the next operation is executed when the first one return, this is why the futures <code>f3</code> to <code>f5</code> are waiting on each other to start. To start them at the same time, you would have to create them outside of the <i>for-comprehension</i> like <code>f1</code> and <code>f2</code>.</p>

<p>The second part is to illustrate the biggest danger about <code>Future</code>. They are <strong>NOT</strong> cancellable !</p>

<p>As you can see, even when the <code>Await</code> time is smaller and would throw an exception, the <code>Future</code> keep running in the background. Which can be dangerous if you are doing some insert in a database for instance and believe that it was cancel, it will not be.</p>

<p>Other framework more advanced like <a href="https://github.com/zio/zio" target="_blank">ZIO</a> offer better asynchronous features using Fibers instead of Threads. But this will have to wait for us to be master in functional programming and more advanced concepts before exploring this library.</p>
</>

const description = "Scala Knowledge Bits - Scala Future - Periodic exercise to learn bits of knowledge about Scala. Scala Future here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-future/"

const prevUrl = "implicit-val"
const nextUrl = "trait"

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
 