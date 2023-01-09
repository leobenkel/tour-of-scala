

import Skb from 'components/skb-page'

export const id = "implicit-conversion"
const title = " Scala implicit conversion"

const date = "2020-11-18T17:00:02"

const scastieId = "2UnR8tnRRky1rrfT1MNDzw"

const mainInfoBox = <>
  <p>Be careful ! I am going to show you something that you have to be really careful about.</p>

<p><i>With great power comes great responsibilities.</i></p>
</>

const detailedInfoBox = <>
  <p>
The construct <code>implicit def</code> allows you to implicitly convert from one type to another.
</p>

<p>
The syntax is pretty straightforward:
</p>
<pre>implicit def [NAME](input: INPUT_TYPE): OUTPUT_TYPE = ???
</pre>
<p>
It is usually named either <code>from[INPUT_TYPE]To[OUTPUT_TYPE]</code> or in our case since it is already contained inside of the <i>companion object</i>, simply <code>to[OUTPUT_TYPE]</code>.
</p>

<p>
You have to be careful however. You can trap yourself. 
</p>

<p>
For instance, if by mistake you are passing the name of the user in the id field, in a normal situation, the compiler would break and tell you that you are giving a <code>String</code> when the method expect an <code>Int</code> and that will catch your mistake. 
</p>
<p>However, let’s say you want to make your life easier for a different use case, you implement an <i>implicit conversion</i> that automatically convert <code>String</code> to <code>Int</code>. At this point, the compiler will automatically convert any <code>String</code> to <code>Int</code> which can create a real mess.
</p>

<p>
I would suggest to use <code>implicit def</code> extremely carefully and in very limited scope. Also, do not implement <i>implicit conversion</i> for basic types such as <code>String</code> or <code>Int</code>, but only for more complex types like <code>trait</code> or <code>case class</code>. So that you have a more refined control on when it is used.
</p>
</>

const description = "Scala Knowledge Bits - Scala implicit conversion - Periodic exercise to learn bits of knowledge about Scala. Scala implicit conversion here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-implicit-conversion/"

const prevUrl = "case-class-copy"
const nextUrl = "case-class-unapply"

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
 