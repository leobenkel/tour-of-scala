

export const id = "implicit-class"
const title = " Scala implicit class"

const date = "2020-09-30T17:02:01"

const scastieId = "pDE2WSbNTtWv2MetlCCumw"

const mainInfoBox = <>
  <p>
Slowly getting into the more advanced features of Scala.</p>
<p>
Starting with <i>implicit class</i>.
</p>
</>

const detailedInfoBox = <>
  <p><i>implicit class</i> allows you to add methods to a <i>type</i>.</p>

<p>
The syntax is like this: 
</p><pre>implicit class NAME(value_name: TypeToOverride) {
  def methodToAdd: OutputType = ???
}
</pre>
<p></p>

<p>
You might have noticed an other form:
</p><pre>implicit class NAME(val value_name: TypeToOverride) extends AnyVal {
  def methodToAdd: OutputType = ???
}
</pre>
<p></p>

<p>
The second form will be more efficient, it will not create a new instance. The first form will create a new instance of the Type which can be inefficient if overused. Then, why not use the <code>AnyVal</code> form all the time ? There are a multitude of reasons, I could go over each and every ones of them, but this <a href="https://stackoverflow.com/a/14931302/3357831" target="_blank">Stackoverflow answer</a> explains it in a lot of details.
</p>
</>

const description = "Scala Knowledge Bits - Scala implicit class - Periodic exercise to learn bits of knowledge about Scala. Scala implicit class here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-implicit-class/"

const prevUrl = "for-comprehension"
const nextUrl = "regex"

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
 