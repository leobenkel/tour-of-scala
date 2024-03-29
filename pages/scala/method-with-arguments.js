import Skb from 'components/skb-page'


export const id = "method-with-arguments"
export const title = "Scala Method with Arguments"

export const date = "2020-07-20T17:00:01"

const scastieId = "P7T6QckdSIKzUFdCdawLEg"

const mainInfoBox = <>
  <p>In programming language, a method does some operations and return a result.</p>
  <p>In most use cases, the method will take parameters to perform the operation.</p>
</>

const detailedInfoBox = <>
  <p>You have learned that <code>a</code> and <code>b</code> are parameters of the method <code>add</code>. You can use them as normal values but only within the method. You can extend the context to several lines with <code>&#123;...&#125;</code>.</p><p>
    In some other programming language, like Java, you need the keyword <code>return</code> to make the method return a value but in Scala, the last line of the method is what is being returned automatically.</p>
</>

const description = "Scala Knowledge Bits - Scala Method with Arguments- Periodic exercise to learn bits of knowledge about Scala. Scala Method with Arguments here."

const prevUrl = "methods"
const nextUrl = "list-sum-method"

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
