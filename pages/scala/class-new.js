

import Skb from 'components/skb-page'

export const id = "class-new"
export const title = "Scala Class new"

export const date = "2020-07-31T17:00:32"

const scastieId = "Yqd2MrzTTJy5OdhDffdyyA"

const mainInfoBox = <>
  <p>Scala is a language that join both worlds “Functional Programming” and “Object Oriented”.</p>
<p>We talked a little bit about “Functional Programming” in the previous SKBs and today we are going to introduce the basics for “Object Oriented” : the classes and more specifically how to create an instance of a class.</p>
<p>We will be diving a bit more into the theory after the exercise.</p>
</>

const detailedInfoBox = <>
  <p>A <code>class</code> is a collection of functions that can be reused. This collection is created with parameters and that will make the <code>instance</code> of the class behave differently.</p>
<p>In a lot of programming books, you will see a <code>class</code> being described as a “blueprint”. And using this “blueprint”, you are able to “instantiate”, or build, an <code>object</code>.</p>
<p>The way to build a class in Scala is using the keyword <code>new</code>.</p>
<p>
To summarize all the terminology:
</p><ul>
<li><b>Class</b>: A collection of methods, values. Built with parameter(s). Instantiated to an object via the keyword <code>new</code>.</li>
<li><b>Object</b>: An instance of a class built with specific parameters.</li>
<li><b>Instantiate</b>: The action of creating an object from a class.</li>
<li><code>new</code>: The keyword used in Scala to instantiate a class and make an object.</li>
<li><b>Field</b>: The <code>val</code> contained in the <code>class</code>.</li>
<li><b>Method</b>: The <code>def</code> (functions) contained in the <code>class</code>.</li>
<li><b>Member</b>: A term to describe both <code>field</code> and <code>method</code>.</li>
</ul>
<p></p>
</>

const description = "Scala Knowledge Bits - Scala Class ‘new’ - Periodic exercise to learn bits of knowledge about Scala. Scala Class ‘new’ here."

const canonical_url = "https://leobenkel.com/2020/07/skb-scala-class-new/"

const prevUrl = "map-for-list"
const nextUrl = "comparators"

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
 