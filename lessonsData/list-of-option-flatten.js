

export const id = "list-of-option-flatten"
const title = " Scala List of Option flatten"

const date = "2020-12-25T17:02:53"

const scastieId = "WU5TCyfhTLKRPcvMccymZg"

const mainInfoBox = <>
  <p>
Recently ( as on December 2020 ), we have talked about List of Option on the Discord server so I thought we would dive in deeper here.
</p>

<p>
This specific <code>flatten</code> operation is not well documented but extremely useful in a lost of use cases. Today we are simply going to see how it works and later on we are going to see in what cases it can be useful.
</p>
</>

const detailedInfoBox = <>
  <p>
We saw it before but <code>flatMap(f)</code> is the same as <code>.map(f).flatten</code>. The <code>flatten</code> operation will combine two layers of container ( monad ) into one. So it will combine <code>List[List[A]]</code> into <code>List[A]</code> or <code>Option[Option[A]]</code> into <code>Option[A]</code> for instance.
</p>

<p>
In this episode, we are looking at what happen in the specific case of <code>List[Option[A]]</code> when it is flatten. 
</p>

<p>
<code>List[Option[A]]</code> will be turned into <code>List[A]</code> by the <code>flatten</code> operation.
</p>

<p>
It might be interesting to note that <code>Option[List[A]].flatten</code> triggers an error.
</p>

<p>
But this answer raise a new question, what happen to the <code>Option</code> elements in the list !?
</p>

<p>
Remember that <code>Option</code> has two possible case. The first one is <code>Some</code> when there is an element, those will simply be opened up and they will be transformed from <code>Some[A]</code> to <code>A</code>. For the second case, <code>None</code>, they will be removed from the list. So you will end up with potentially less element that you started with in the list after performing the <code>flatten</code> operation. 
</p>

<p>
It would be equivalent of doing this:
</p>

<pre>val l: List[Option[A]] = ???

val r: List[A] = l 
  .filter{
    case Some(_) =&gt; true
    case None =&gt; false
  }
  .map {
     case Some(n) =&gt; n
     case None =&gt; throw new Exception("Cannot happen")
  }
</pre>
</>

const description = "Scala Knowledge Bits - Scala List of Option flatten - Periodic exercise to learn bits of knowledge about Scala. Scala List of Option flatten here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-list-of-option-flatten/"

const prevUrl = "list-pattern-matching"
const nextUrl = "operators"

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
 