

export const id = "sealed"
const title = " Scala Sealed"

const date = "2020-10-26T17:02:35"

const scastieId = "FLCt7eVzRmedD4gb40BpVQ"

const mainInfoBox = <>
  <p>A simple new keyword today</p>

<p>It is not possible to illustrate its main function using Scastie, so if you would like to learn more you will have to read the description snippet below. I am sorry about that.</p>
</>

const detailedInfoBox = <>
  <p>We are reusing a lot of feature we saw in the past for this SKB. Everything should look familiar except the new keyword <code>sealed</code></p>

<p>
<code>sealed</code> is related to Object Oriented Programming and more specifically about inheritance.
</p>

<p>
The keyword <code>sealed</code> allows you to block inheritance if it is not within the same file. If you define a <code>sealed</code> <code>trait</code> or <code>abstract class</code> ( it works for both the exact same way ), you will only be able to <code>extends</code> this <code>trait</code> within this file. 
</p>

<p>This is the reason why it is hard to illustrate it within Scastie since everything is just one worksheet.</p>

<p>It is very useful when you want to describe something which have finite options. We are going to learn more about a very specific use case in the next SKB.</p>
</>

const description = "Scala Knowledge Bits - Scala Sealed - Periodic exercise to learn bits of knowledge about Scala. Scala Sealed here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-sealed/"

const prevUrl = "generic-trait"
const nextUrl = "case-object"

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
 