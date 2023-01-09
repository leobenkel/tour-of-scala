

export const id = "self-referred-type"
const title = " Scala self-referred type"

const date = "2020-12-18T17:00:02"

const scastieId = "9fDW3IfPTParnRzONDXkkA"

const mainInfoBox = <>
  <p>
Let’s dive more into generic type and self-referred type. 
</p>
<p>
The use case is how to use the children Type in the Parent trait safely.
</p>
</>

const detailedInfoBox = <>
  <p>
Sorry for the long exercise but I really wanted to show step by step how we end up with this solution based on the problem encountered.
</p>
<p>
In the first example, without doing anything, we are able to change the output type to the child type when we override the method but not the input type.
</p>
<p>
In the second example we now have information about the child type from inside the parent trait but there are not guarantee that <code>A</code> is the right children, it could be any children.
</p>
<p>
With the final solution, <code>A</code> must be in used in the child type which guarantee that it is the child.
</p>
<p>
Let’s summaries the syntax:
</p>
<pre>trait Name[A &lt;: Name[A]] { this: A =&gt; 
}
</pre>
<p>
Hopefully that will help you make the compiler your friend and catch more mistake at compile time rather than at runtime !
</p>


</>

const description = "Scala Knowledge Bits - Scala self-referred type - Periodic exercise to learn bits of knowledge about Scala. Scala self-referred type here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-self-referred-type/"

const prevUrl = "star-parameter"
const nextUrl = "option-pattern-matching"

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
 