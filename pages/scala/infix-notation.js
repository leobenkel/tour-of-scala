import Skb from 'components/skb-page'


export const id = "infix-notation"
export const title = "Scala infix notation"

export const date = "2020-11-04T17:03:46"

const scastieId = "5YZMNrc1R5WjgZlBc772Kw"

const mainInfoBox = <>
  <p>
    This SKB will teach you a little more about some syntax allowed by the Scala language: infix.
  </p>
  <p>
    It allows you to remove the <code>.</code> and the <code>()</code> when using a method.
  </p>

</>

const detailedInfoBox = <>
  <p>
    First of all, did you realize that every operation that seems to be “magic” like the <code>+</code> or <code>==</code> are just function like any other. But by habit , we use the infix notation for those by default. It is possible to use the “normal” notation with the <code>.</code> and the <code>()</code> but let's be honest, it looks weird !
  </p>

  <p>
    You can use the infix notation for every method that takes one argument. Which means you can use it for <code>map</code>, <code>flatMap</code> and all the other ones.
  </p>

  <p>
    We also kind of saw it quickly previously when we talked about <code>reduce</code>. We saw that we could turn
  </p><pre>list.reduce ( (a, b) =&gt; a.combineWith(b) )
  </pre>
  into
  <pre>list.reduce ( _ combinedWith _ )
  </pre>
  You now understand one part of puzzle. The second part being the <code>_</code> that we are going to see soon.
  <p></p>

  <p>
    One last note, be careful not to abuse it or the code can become extremely horrible to decipher. You could chain methods are methods and lost track of which value is executing what.
  </p><pre>a map _ combined v map _ + 1
  </pre>
  This example is hard to read. Does <code>combined</code> return a list ? What is the second <code>map</code> applied to ? So, be careful !
  <p></p>

  <p>It is also possible to use infix notation for function that has no arguments, but it is an extra feature, not included by default that you need to enable. To learn more, you can search for <code>scala.language.postfixOps</code> which allow you to use infix notation even without an argument.</p>
</>

const description = "Scala Knowledge Bits - Scala infix notation - Periodic exercise to learn bits of knowledge about Scala. Scala infix notation here."

const prevUrl = "contexts"
const nextUrl = "pattern-matching-at"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
