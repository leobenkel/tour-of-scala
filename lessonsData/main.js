

export const id = "main"
const title = " Scala main"

const date = "2020-09-14T17:00:10"

const scastieId = "Eb9UJewvRlOeORHTpjD5lQ"

const mainInfoBox = <>
  <p>
A <code>main</code> is the method that is being called to start your program. It needs a specific structure – called <i>prototype</i> when talking about methods – to be recognized.
</p>

<p>Until now we ran all the SKBs in <i>Worksheet</i> mode which hides the <code>main</code> from us.</p>
</>

const detailedInfoBox = <>
  <p>
If you have tried to remove or change the <code>main</code> function, you might have noticed an exception:
</p><pre>java.lang.RuntimeException: No main class detected.
</pre>
<p></p>
<p>
This <code>Exception</code> will be thrown if a <code>main</code> method cannot be found or is not contained within an <code>object</code>. Try to change the code to trigger it.
</p>
<p>
The main prototype is always of the form:
</p><pre>def main(args: Array[String]): Unit = { }
</pre>
The <code>args: Array[String]</code> is where you would be able to read and use the arguments given to the application when started.
<p></p>
<p>
That is pretty much it concerning <code>main</code>, so I thought it would be nice to combine some of the things we’ve seen in the past. This SKB is using <code>Map</code>, <code>object</code>, <code>Option</code>, <code>lazy val</code>, <code>def</code> all into the same project. Try to play with it and make it your own.
</p>
</>

const description = "Scala Knowledge Bits - Scala main - Periodic exercise to learn bits of knowledge about Scala. Scala main here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-main/"

const prevUrl = "list-parallel"
const nextUrl = "set"

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
 