import Skb from 'components/skb-page'


export const id = "list-parallel"
export const title = "Scala List parallel"

export const date = "2020-09-11T17:01:21"

const scastieId = "8kl0ZPy6T2ycipzz5iNkSg"

const mainInfoBox = <>
  <p>
    I am going to give you an introduction to <i>parallelization</i>. For this, I will be using <code>par</code>.</p>

  <p>However, you have to know, that to use this in <strong>Scala 2.13+</strong> you need extra steps. You can read more on <a href="https://stackoverflow.com/a/57290463/3357831" target="_blank">Stackoverflow</a>.  I made the choice to still be using it because, I think, it is a great stepping stone to understand more complex subjects.
  </p>
  <p>Let's dive in!</p>

</>

const detailedInfoBox = <>
  <p>
    Compare the output of the two <code>map</code>. In the first one, you see the numbers in the same order they are in the source <code>Range</code>. In the second one, the order is random, try running it several times ; you will see the order of the print statements change.
  </p>

  <p>
    This happen because all the operation executed in the <code>map</code> happen at the <i>same</i> time, in parallel.
  </p>

  <p>Remember the SKB on <code>Thread.sleep</code>, this was the introduction to the concept of Threads. To allow each operation to happen at the same time, Scala will manage a pool of threads for you. Each operation will be allocated to thread that the computer will compute and then return the result for each operation. Finally, the result will be combined before being returned to you.</p>

  <p>In further SKBs, we are going to learn more about threads in more details. We are going to talk about <code>Fiber</code>, <code>Future</code>, <code>asynchronous</code> and more. Stay tuned!</p>
</>

const description = "Scala Knowledge Bits - Scala List parallel - Periodic exercise to learn bits of knowledge about Scala. Scala  List parallel here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-list-parallel/"

const prevUrl = "range"
const nextUrl = "main"

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
