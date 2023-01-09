

import Skb from 'components/skb-page'

export const id = "repeated-parameters"
const title = " Scala Repeated Parameters"

const date = "2020-10-21T17:02:40"

const scastieId = "t4txyXUBQ16HDTrla2PhZw"

const mainInfoBox = <>
  <p>
Little break in <i>Object Oriented Programming</i> and <i>Functional Programming</i> features.
</p>
<p>
Today is about a little “nice to know”.
</p>
</>

const detailedInfoBox = <>
  <p>
You probably understood that this allow you to take an array as input without having to actually create an array when calling the function.</p>

<p> 
It can be very useful with nested case class with list of list. It makes the code more readable.

</p><pre>
case class Foo(f: Foo*)

Foo(
  Foo(
    Foo(),
    Foo()
  ),
  Foo()
)
</pre>

Imagine this code with having to create <code>List(Foo())</code> each time, it would make the code really hard to digest.
<p></p>

<p>
But, like everything in life, there is a drawback… If you already have an array, you need to use the weird <code>:_*</code>. It is a minor issue, with experience, you are going to know those few characters by heart. It basically turns a list of item into a series of arguments.
</p>

</>

const description = "Scala Knowledge Bits - Scala Repeated Parameters - Periodic exercise to learn bits of knowledge about Scala. Scala Repeated Parameters here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-repeated-parameters/"

const prevUrl = "recursion"
const nextUrl = "generic-trait"

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
 