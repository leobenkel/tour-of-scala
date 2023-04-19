import Skb from 'components/skb-page'


export const id = "methods"
export const title = "Scala Methods"

export const date = "2020-07-17T17:00:40"

const scastieId = "WAa2MFWwQBW2rIPjVNBgEw"

const mainInfoBox = <>
  <p>A method in programming language is a bit of code that get executed when called and return a value.</p>
  <p>In Scala, the boundary between Values and Methods is very thin and we are going to learn more about all of it as we go into more complex Scala Knowledge Bits.</p><p>But, if things goes as planned, today should be simple.</p>
</>

const detailedInfoBox = <>
  <p>I hope you had fun with today's Scala Knowledge Bit ! </p>
  <p>One main thing to note, if the method do not take arguments, you do not need the <code>(...)</code>, the parentheses are optional.</p>
  <p>In practice, you have to be careful when calling the method. Be sure to use parentheses when it was defined with them. And don't use the parentheses when the method was defined without them.</p>
</>

const description = "Scala Knowledge Bits - Scala Methods - Periodic exercise to learn bits of knowledge about Scala. Scala Methods here."

const prevUrl = "string-interpolation"
const nextUrl = "method-with-arguments"

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
