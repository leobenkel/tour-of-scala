import Skb from 'components/skb-page'


export const id = "list-flatten"
export const title = "Scala List Flatten"

export const date = "2020-08-24T17:02:03"

const scastieId = "fGhtslb9TiiTQ5brcXpgLg"

const mainInfoBox = <>
  <p>Do you remember the <code>map</code>, from few SKBs ago ?</p>

  <p>As a reminder, <code>map</code> allows you to transform a <code>List[A]</code> into a <code>List[B]</code>.</p>

  <p>What will happen if <code>B</code> is a <code>List</code> as well ?</p>
</>

const detailedInfoBox = <>
  <p>
    <code>flatten</code> allows you to turn a <code>List[List[A]]</code> into a <code>List[A]</code>.</p>

  <p>
    Try to experiment with other <i>containers</i> such as <code>Option</code> we saw in the past.
  </p>

  <p>What happen if you do </p>
  <pre>
    <p>val a: Option[Int] = Some(12)</p>

    <p>val aa: Option[Option[Int]] = a.map(x =&gt; Some(x))</p>

    <p>val flattenA: Option[Int] = aa.flatten</p>
  </pre>
  <p></p>

</>

const description = "Scala Knowledge Bits - Scala List Flatten - Periodic exercise to learn bits of knowledge about Scala. Scala List Flatten here."

const prevUrl = "option-map"
const nextUrl = "tuple"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
