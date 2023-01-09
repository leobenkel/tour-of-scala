

export const id = "companion-objects"
const title = " Scala companion objects"

const date = "2020-08-17T17:00:05"

const scastieId = "cwwIb13GTha0xT9adIjMqw"

const mainInfoBox = <>
  <p><code>Companion objects</code> are a specific type of <code>object</code>.</p>

<p>Just like the <code>object</code> we saw in the previous SKB, <code>companion object</code> does not need to be instantiated.</p>

<p>The source of the main difference between <code>object</code> and <code>companion object</code> comes from the name that they share with a <code>class</code>.</p>
</>

const detailedInfoBox = <>
  <p>Did you notice that the <code>class</code> named <code>Animal</code> is able to call a method named <code>convertLegNumberToName</code> that is defined as <code>private</code>?</p>

<p>Other thing to notice is the <code>import</code>. In the previous SKB related to <code>object</code>, we learned how to call the member of an <code>object</code> using its name. When you use the <code>import</code>, you do not need to use the name anymore. Inside the context, where the <code>import</code> is used, with the <code>Animal._</code>, the name is not needed to be called.</p>

<p>To summarize, a <code>companion object</code> is exactly like an object, except that the <code>class</code> that share the same name can access the <code>private</code> members.</p>

<p>It is commonly used when you need to have constant or helper methods related to this class.</p>
<p>Leaving those members inside the class can create memory issues. Let’s say you have a large constant – maybe an array or some other complex object. If it is stored inside the <code>class</code>, then each instantiation will make a copy of this constant in the memory. If instead the constant is in the <code>companion object</code>, then the program will only have to create the constant once.</p>


</>

const description = "Scala Knowledge Bits - Scala companion objects - Periodic exercise to learn bits of knowledge about Scala. Scala companion objects here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-companion-objects/"

const prevUrl = "visibility"
const nextUrl = "apply"

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
 