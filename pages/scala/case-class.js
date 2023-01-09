

import Skb from 'components/skb-page'

export const id = "case-class"
export const title = "Scala Case Class"

export const date = "2020-08-10T17:01:37"

const scastieId = "2cLIBX4MTeK7xf7fXBPI4A"

const mainInfoBox = <>
  <p>We learned about <code>class</code> in a previous SKB, today we are going to learn about <code>case class</code>. They serve the same purpose which is to provide a blueprint to create <code>object</code>s. But case class provides a lot of build-in advantages.</p>
<p>As a start, notice how the case class is being instantiated, and how the fields are being accessed.</p>
</>

const detailedInfoBox = <>
  <p>Did you notice that we do not need <code>new</code> to create the instance of the <code>class</code>?</p>
<p>And did you notice that we do not need a function to access any of the fields?</p>
<p>In Scala, <code>case class</code> provide build-in things, let’s go over them: 
</p><ul>

<li>Constructor: To instantiate an object from a case class, no need for the <code>new</code> keyword. Note that <code>class</code> will not need <code>new</code> either in Scala 3. To understand how this is done, remember the words <code>apply</code> and <code>Companion Object</code>, we are going to come back to it later.</li>

<li>Field accessors: in <code>case class</code>, the field are <code>public</code> ( we are going to talk about <code>visibility</code> later ) by default. So you can access their values without the need to a method that will return it for you.</li>

<li>And more; remember the terms <code>unapply</code>, <code>Product</code> and <code>Serialization</code> for later SKBs.</li>

</ul>
<p></p>
</>

const description = "Scala Knowledge Bits - Scala Case Class - Periodic exercise to learn bits of knowledge about Scala. Scala Case Class here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-case-class/"

const prevUrl = "call-by-name-parameters"
const nextUrl = "objects"

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
 