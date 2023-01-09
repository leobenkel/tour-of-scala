

import Skb from 'components/skb-page'

export const id = "higher-kind"
const title = " Scala higher kind"

const date = "2020-12-09T17:00:01"

const scastieId = "fC18HjQmT6Gbh5mTox5zbw"

const mainInfoBox = <>
  <p>
Let’s dive more into object oriented programming ideas but with a dash of functional programming.
</p>

<p>
The idea today is to go a bit further with <code>trait</code> and be able to describe behaviors of <i>higher kinds</i>. It is just a fancy terms to describe type that accept type as parameter, such as <code>List[A]</code>, the <code>A</code> being the type accepted as parameter.
</p>
</>

const detailedInfoBox = <>
  <p>
To create a generic trait that “target” type that take type(s) as parameter, the syntax is:
</p>

<pre>trait MyTrait[F[_]] {}
</pre>

<p>
The <code>F[_]</code> means that we are expecting a type <code>F</code> that take one type parameter as argument, the <code>_</code>.
</p>

<p>
Note that it is possible to target a type that takes two types as input with the following syntax: <code>F[_, _]</code>. You can imagine that it is possible to target type with more than two following the same logic.
</p>

<p>
When you use a parameterized type you do something like <code>List[Int]</code> so if you want to use the type itself you simply has to do <code>Trait[List]</code>, not need to add anything after the <code>List</code>.
</p>

<p>
You also noticed that you can create your own type and it will behave the same way. Look at <code>CounterT</code> in our example. It takes one type as parameter so it can be used with our <code>trait</code>.
</p>
</>

const description = "Scala Knowledge Bits - Scala higher kind - Periodic exercise to learn bits of knowledge about Scala. Scala higher kind here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-higher-kind/"

const prevUrl = "constraint-inheritance"
const nextUrl = "_-wildcard"

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
 