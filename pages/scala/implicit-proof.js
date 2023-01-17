

import Skb from 'components/skb-page'

export const id = "implicit-proof"
export const title = "Scala implicit proof"

export const date = "2020-11-30T17:00:00"

const scastieId = "rPQxPMehSye8cwfa4VU9zg"

const mainInfoBox = <>
  <p>
Today diving deeper into making a friend out of the compiler.
</p>
<p>
We are going to learn on how to guarantee that a generic type follow specific rules. We are going to use <i>implicit proof</i>.
</p>
</>

const detailedInfoBox = <>
  <p>
Hopefully this was not too hard. If you have any questions, please come ask them on the Discord server.
</p>

<p>
The first way to prove that a generic type <code>A</code> is of type <code>T</code>, we can do the following:
</p>

<pre>def name[A: T](arguments...): RETURN_TYPE = ???
</pre>

<p>
This syntax will block compilation if we use the method with a type that cannot be proven to be of type <code>T</code> or made of type <code>T</code> with conversions.
</p>

<p>
You will often see this being used with <code>A : TypeTag: ClassTag</code> but we are going to look into those Scala standard types an other time in a dedicated episode.
</p>

<p>
In our example, you can see that we define our proofs in <code>ValidFoos</code> using the syntax:
</p>

<pre>implicit val name: PROOF_TYPE[TYPE_NEEDING_PROOF] = ???
</pre>

<p>
Our example is of course a bit silly but there are production use cases that would need those structures. For instance if you have complex data types that share underlying <code>trait</code>. But we are going to see more advance use case right now, when we actually use the proof.
</p>

<p>
In the second example, not only we are requiring a proof, but we are not using the <code>[A: T]</code> syntax, we are using the syntax that expose the proof so we can use it:
</p>

<pre>def name[A](arguments...)(implicit proof_name: PROOF_TYPE[A]): RETURN_TYPE = ???
</pre>

<p>
Written this way, we can actually use the proof and do things with it. 
</p>

<p>
In this case, we want the proof that the input is some kind of number, we do not want to write one function for <code>Int</code>, one for <code>Double</code>, one for <code>Long</code>, etc… That would be very tedious. So we need a way to target all numbers. In Scala, we can prove that a TYPE is a number when there a <code>Numeric[A]</code> proof. 
</p>

<p>
Once we acquire the proof, we can use <code>num</code> to perform operations. For instance, we simply perform a sum here.
</p>
</>

const description = "Scala Knowledge Bits - Scala implicit proof - Periodic exercise to learn bits of knowledge about Scala. Scala implicit proof here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-implicit-proof/"

const prevUrl = "_-placeholder"
const nextUrl = "unapply-magic"

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
 