

export const id = "contexts"
const title = " Scala contexts"

const date = "2020-11-02T17:01:11"

const scastieId = "IpAmRkEzSOGRRDEFuAp5RA"

const mainInfoBox = <>
  <p>
We are going to formalize something we saw before but without stopping and looking at it.
</p>
<p>
Contexts are defined by <code>{ ... }</code>.
</p>
</>

const detailedInfoBox = <>
  <p>
You realize that we saw <i>context</i> before. We saw the characters <code>{</code> and <code>}</code> in the previous SKBs.
</p>

<p>
We saw it before when we defined a method using <code>def</code>. We also saw it when we defined a <code>class</code>, an <code>object</code>, even a <code>val</code>.
</p>

<p>
If you use a <code>val</code> within a context, you are going to be using the one the closest to the context you are in. Keep in mind that it is not good practice to reuse the same name over and over as it makes the code extremely confusing and hard to debug. But this example is trying to illustrate to <i>scope</i> of the <code>val</code> based on inside which context is has been declared and is being used.
</p>

<p>
Context always return a value. You can see that in the very first context defined by 
</p><pre>1
</pre>
This context is implicit, and could be re-written to:
<pre>{ 
   1
}
</pre>
This is the same concept for each <code>val</code>:
<pre>val a: Int = 1
</pre>
can be read as 
<pre>val a: Int = {
   1
}
</pre>
<p></p>
<p>
Context always return the last line of code as its overall returned value. The other aspect to know about is related to the <i>garbage collector</i> inherited from <i>Java</i>. Yes, sometimes we have to remember that Scala is based on the JVM and inherits some of its core features, one of them being the <i>garbage collector</i>. 
</p>
<p>
The idea behind the <i>garbage collector</i> is the memory management. Each time you create a <code>val</code> you need to allocate memories to keep it “alive”. That is all well and good but if you keep creating more and more things, your computer is going to die. How do you know you can remove a value from the memory ? Context !
</p>
<p>
When the program is leaving a context, it knows it can safely remove all values that were declared in this context and free the memory. 
</p>
<p>
I hope this SKB was helpful in understanding better the structure of a Scala program. As always, don’t hesitate to message me or any member of our community if you need help ! 
</p>
</>

const description = "Scala Knowledge Bits - Scala contexts - Periodic exercise to learn bits of knowledge about Scala. Scala contexts here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-contexts/"

const prevUrl = "enumeration"
const nextUrl = "infix-notation"

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
 