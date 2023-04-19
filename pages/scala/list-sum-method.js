import Skb from 'components/skb-page'


export const id = "list-sum-method"
export const title = "Scala List Sum Method"

export const date = "2020-07-22T17:01:35"

const scastieId = "WkXaFPHSR7q1M4I7xncZFg"

const mainInfoBox = <>
  <p>Scala has a lot of pre-built methods. We are going to learn about one related to <code>List</code> called <code>sum</code>.</p>
</>

const detailedInfoBox = <>
  <p><code>sum</code> will go through each element of the List and add all the elements together.</p>
  <p>It is actually a shortcut for <code>list.fold(0)( _ + _ )</code>. It might look strange syntax right now but SKB will help you become an expert soon.
  </p>
</>

const description = "Scala Knowledge Bits - Scala List Sum Method - Periodic exercise to learn bits of knowledge about Scala. Scala List Sum Method here."

const prevUrl = "method-with-arguments"
const nextUrl = "option"

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
