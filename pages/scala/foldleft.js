import Skb from 'components/skb-page'


export const id = "foldleft"
export const title = "Scala foldLeft"

export const date = "2020-09-23T17:01:07"

const scastieId = "1YO5x72fSE686gtMiAxKzQ"

const mainInfoBox = <>
  <p>Let me introduce <i>accumulators</i> and <i>aggregations</i>.</p>

  <p><code>foldLeft</code> is the generic concept that is under most of the function programming transformations. You can replace <code>map</code>, <code>flatMap</code>, <code>filter</code> and more by a <code>foldLeft</code>.</p>
</>

const detailedInfoBox = <>
  <p>
    In this exercise, you can see two use cases of <code>foldLeft</code>.
    But first let's explain the syntax:
  </p><pre>foldLeft(initialValue) { case (accumulator, currentElement) =&gt;
    // return the new value of the accumulator
}
  </pre>

  Note that when <code>currentElement</code> is the first element of the <code>List</code>, then <code>accumulator</code> is equal to <code>initialValue</code>. Also, if the the list is empty, then the returned value will be the <code>initialValue</code>.
  <p></p>

  <p>
    The returned value can be anything, for instance:
  </p><pre>foldLeft(List.empty) { case (accumulator, currentElement) =&gt;
    accumulator :+ currentElement 
}
  </pre>
  would return a new <code>List</code> with the same content as the input list.
  <p></p>
  <p>
    An other example:
  </p><pre>foldLeft(0) { case (accumulator, currentElement) =&gt;
    accumulator + currentElement 
}
  </pre>
  would return the total sum of the item of the <code>List</code>. This is similar to the first example in today's exercise. And scala provide a shortcut for it: <code>.sum</code>, this would be a special case of the exercise when the initial value is <code>0</code>.
  <p></p>

  <p>
    In the second use case, there is a bit more going on. It uses <i>pattern matching</i> to implement different behavior based on the current element and create a new list element by element.
  </p>

  <p>
    As an extra exercise, try to compute the average of the list by changing the initialized value from <code>startFold</code> to <code>(0, 0)</code> and modify the function to aggregate the values.
  </p>

  <p>You can also try to implement <code>map</code>, <code>flatMap</code> and, <code>filter</code> using <code>foldLeft</code>. Share your solution with our community on Discord !</p>

</>

const description = "Scala Knowledge Bits - Scala foldLeft - Periodic exercise to learn bits of knowledge about Scala. Scala foldLeft here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-foldleft/"

const prevUrl = "pattern-matching"
const nextUrl = "stream"

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
