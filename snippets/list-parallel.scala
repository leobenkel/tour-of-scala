// Learn more about Scala on https://leobenkel.com

import scala.collection.parallel.CollectionConverters._

val from: Int = 0
val end: Int = 12
// have fun with the step. You know "Range" now.
val step: Int = ???
val expected: Int = ???

val result1: Int = (from to end by step).map { a =>
  val adder: Int = ???
  println(s"#seq> $a + $adder")
  a + adder
}.sum
assert(result1 == expected, result1)

println("With 'par':")
val result2: Int = (from to end by step).par.map { a =>
  val adder: Int = ???
  println(s"#par> $a + $adder")
  a + adder
}.sum
assert(result2 == expected, result2)

println(
  "Congratulations ! 'Do today what others won’t so tomorrow you can do what others can’t.' – Jerry Rice"
)
