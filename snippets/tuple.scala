// Learn more about Scala on https://leobenkel.com

// Tuple2:

val a: (Int, String) = (12, ???)

// Accessors

val first: Int = a._1
val second: String = ???

assert(first == 12)
assert(second == "abc")

// Flip a Tuple 2

val flip = a.swap

val expectedFlip: (String, Int) = "abc" -> ???

assert(flip == expectedFlip)

// Tuple3

val tripleList: List[(Int, String, Int)] = List(
  (1, "a", 1),
  (???, ???, ???),
  (3, "c", 3)
)

// tuple in map
val modifiedTripleList: List[(Int, String)] =
  tripleList.map(r => (r._1 + r._3) -> ???)

val expectedModifiedTripleList: List[(Int, String)] = List(
  2 -> ???,
  4 -> "haha",
  ???
)

assert(expectedModifiedTripleList == modifiedTripleList)

println("Congratulations ! Do not be afraid, you are not alone.")
