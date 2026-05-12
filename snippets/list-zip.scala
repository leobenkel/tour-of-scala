// Learn more about Scala on https://leobenkel.com

val l1: List[Int] = ???
val l2: List[Int] = ???

assert(l1.length >= l2.length)

// step by step

val r_zip: List[(Int, Int)] = l1 zip l2
println(r_zip)

val r_swap: List[(Int, Int)] = r_zip.map(tuple => tuple.swap)
println(r_swap)

val r_delta: List[Int] = r_swap.map { case (a, b) => ??? }
println(r_delta)

val r_sum: Int = r_delta.sum
println(r_sum)

lazy val expectedValue: Int = ???
assert(r_sum == expectedValue, r_sum)

// all at once
lazy val r: Int = l1
  .zip(???)
  // just replace the whole (??? : TYPE) .
  // It was to resolve compilation issue so the error happen in the right order to solve the exercise.
  // Sorry about that.
  .map(tuple => (??? : (Int, Int)))
  .map { case (a, b) => (??? : Int) }
  .sum
println(r)

assert(r_sum == r)

println(
  "Congratulations ! 'If you do what you always did, you will get what you always got.' - Anonymous"
)
