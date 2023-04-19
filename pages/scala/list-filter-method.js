import Skb from 'components/skb-page'


export const id = "list-filter-method"
export const title = "Scala List Filter Method"

export const date = "2020-08-05T17:00:53"

const scastieId = "EVfJS5WZRDWtIdzPHXOs6w"

const mainInfoBox = <>
  <p>In a previous SKB, we met the <code>map</code> method that the standard library offers. There are plenty more, but let's focus on the <code>filter</code> method in this Scala Knowledge Bit.</p>
</>

const detailedInfoBox = <>
  <p>The <code>filter</code> method allows you to keep the elements of the list that return true for the test (Also called a lambda function).</p>
  <p>For instance, for <code>list.filter(a =&gt; a &gt; 2)</code>, the <code>list</code> will be filtered down to only keep the elements that are <code>&gt; 2</code> (greater than 2). If the list was <code>List(1,2,3,4)</code> then the filter method would return a new list: <code>List(3,4)</code>.</p>
</>

const description = "Scala Knowledge Bits - Scala List Filter Method - Periodic exercise to learn bits of knowledge about Scala. Scala List Filter Method here."

const prevUrl = "comparators"
const nextUrl = "call-by-name-parameters"

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
