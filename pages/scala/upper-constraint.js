

import Skb from 'components/skb-page'

export const id = "upper-constraint"
const title = " Scala upper constraint"

const date = "2020-11-13T17:04:31"

const scastieId = "wYG9m3B3T1qBOuvy5vLjAQ"

const mainInfoBox = <>
  <p>Let’s go back to Object Oriented Programming concepts and specifically to interfaces (<code>trait</code>).</p>

<p>We are going to see how to constraint what type can be passed on. Several constraints are possible, let’s talk about a upper bound. The technical term for it is <i>Upper Type Bounds</i> but let’s keep it simple.
</p>
</>

const detailedInfoBox = <>
  <p>
The new operator we are looking at today is <code>&lt;:</code>
</p>

<p>
The syntax is <code>A &lt;: B</code> and it means that the type <code>A</code> must be <code>B</code> or a class that has inherited from <code>B</code>, a child class.
</p>

<p>
The main advantage of doing this is that if you were to only have a simple generic class <code>[A]</code>, you would not know anything about <code>A</code> at compile time. However, if you <i>bound</i> it, using <code>[A &lt;: B]</code>, the compiler would know that <code>A</code> is <i>at least</i> a <code>B</code>. That allow you to write code that can use the fields and methods of <code>B</code> as if <code>A</code> was <code>B</code>.
</p>

<p>
Extra note, when defining a custom type using <code>type</code>, it is possible to describe in a parent class as <code>type MYTYPE &lt;: CONSTRAINT</code> so that child class has to implement it with a type that is a child of <code>CONSTRAINT</code>.
</p>
<pre>trait ParentClassOfConstraint

class ChildClassOfConstraint extends ParentClassOfConstraint

trait Foo {
   type MYTYPE &lt;: ParentClassOfConstraint
}

class Bar extends Foo {
   override type MYTYPE = ChildClassOfConstraint
}
</pre>

<p> It is a bit advanced but I thought you should know about it.</p>
</>

const description = "Scala Knowledge Bits - Scala upper constraint - Periodic exercise to learn bits of knowledge about Scala. Scala upper constraint here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-upper-constraint/"

const prevUrl = "pattern-matching-for-case-class"
const nextUrl = "case-class-copy"

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
 