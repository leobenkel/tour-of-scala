

import Skb from 'components/skb-page'

export const id = "multiple-inheritance"
const title = " Scala multiple inheritance"

const date = "2020-12-04T17:01:30"

const scastieId = "QpCO0GjsTrKBo4wGdIpEJA"

const mainInfoBox = <>
  <p>
We talked about inheritance in the past.
</p>
<p>
Let’s see how we can combine several <code>trait</code> together and what are the limitations.
</p>

<p>
For this episode, finish the exercise once and then go back and follow the extra instructions in the comments if you have time to learn more.
</p>
</>

const detailedInfoBox = <>
  <p>
The keyword of the day is <code>with</code>.
</p>

<p>
This article is for scala 2.x, things are changing in scala 3.x but the concepts are still the same. At the time of this article, Scastie, which I use to render the exercise do not support Scala 3 yet so we are going to revisit those concept and the new syntaxes in the future.
</p>

<p>
We saw <code>extends</code> already, when we want to add one more <code>trait</code> to the mix, we use <code>with</code> for the one after the first one.
</p>

<pre>[case] class MyClass(args....) extends TRAIT1 with TRAIT2 with TRAIT3 .... {

}
</pre>

<p>
If you have followed the extra instructions in the comments after you were done with the exercise, you noticed that <code>trait</code> and <code>abstract class</code> behave differently. 
</p>

<p>
You have to put the <code>abstract class</code> in first position and you can only have one present. It can seems weird but in practice, it is rarely an issue since you can convert the <code>abstract class</code> to a <code>trait</code> very easily. You would just move the input arguments to the body of the <code>class</code> and make them methods with <code>def</code>.
</p>

<p>
You might have also noticed that you can mix two or more <code>trait</code> that have the same method(s) defined as long as they are identical. But it stops working if they have methods with the same name but different types.
</p>

<p>
And the last bits to keep in mind is when using defined type, you cannot use that has a shortcut to create larger <code>trait</code>. But you can use it in the position of type. Let me explain:
</p>

<pre>type FOO = A with B

// this do no work:
trait BAR extends FOO

// this works:
trait BAR extends A with B

// this works:
val f: FOO = ???
</pre>

<p>If you want to create bundle of <code>trait</code>, you can simply make a new <code>trait</code></p>

<pre>trait FOO extends A with B

trait BAR extends FOO

val f: FOO = new BAR {}
</pre>

<p>And that is it for mixing several <code>trait</code> and handle multiple inheritance. As always, if you have questions or feedbacks, jump on the Discord server ! See you there.</p>
</>

const description = "Scala Knowledge Bits - Scala multiple inheritance - Periodic exercise to learn bits of knowledge about Scala. Scala multiple inheritance here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-multiple-inheritance/"

const prevUrl = "unapply-magic"
const nextUrl = "constraint-inheritance"

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
 