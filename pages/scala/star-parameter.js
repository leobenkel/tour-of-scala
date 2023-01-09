

import Skb from 'components/skb-page'

export const id = "star-parameter"
const title = " Scala *-parameter"

const date = "2020-12-16T17:00:54"

const scastieId = "uhVWCfgeREWEbRKVUX639w"

const mainInfoBox = <>
  <p>
Let’s see how we can pass an array as argument smoothly.
</p>

<p>
We are going to see an example when this syntax shine the most: nested Node creation.
</p>
</>

const detailedInfoBox = <>
  <p>
Do you experience the pain of writing <code>Node(List(Node(List(...</code>. Not pleasant huh ?!
</p>
<p>
But never again you will have to do this now that you know about <code>*</code> !
</p>
<p>Let’s see how it works:</p>
<p>
In a function, you can have <code>TYPE*</code> to take all the last parameters given to the function and turn it into an array. If you place the argument of the method with <code>TYPE*</code> <strong>not</strong> as last argument you will get an exception <code>*-parameter must come last</code>.
</p>
<p>
After doing this, instead of doing <code>foo(List(a,b,c))</code> you are able to do <code>foo(a,b,c)</code>. And inside the body of the method you can use the parameter the same as before.
</p>

<p>
But now, let’s say in some part of your code you do have a <code>List</code> already but you have changed the method, you want to convert the <code>List</code> into a <code>*-parameter</code>. 
</p>
<p>
The weird syntax to do this is: <code>foo(list:_*)</code>. It means you are casting (changing the type) , with <code>:</code> into <code>_</code> which is a wildcard, so anything, in this case, the anything being the type <code>A</code> of the list which should be the same as the input type of the method <code>A*</code>, and finally <code>*</code>.
</p>
<p>
If we look at the type only we are doing this:
</p>
<pre>list      : _*
List[A] : A*
</pre>
<p>
If I didn’t explain well, please feel free to reach out on the Discord server so we can improve the content of this article together.
</p>
</>

const description = "Scala Knowledge Bits - Scala array as function argument - Periodic exercise to learn bits of knowledge about Scala. Scala array as function argument here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-star-parameter/"

const prevUrl = "val-pattern-matching"
const nextUrl = "self-referred-type"

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
 