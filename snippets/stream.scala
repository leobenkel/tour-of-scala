// Learn more about Scala on https://leobenkel.com

val startN: Int = ???
val increment: Int = ???

// FIRST STREAM //
println("- First stream -")

// Stream was renamed to LazyList in scala 2.13
def stream1(n: Int = 0): LazyList[Int] = {
  n #:: stream1(n + increment)
}
val s1 = stream1(startN)
val takeN: Int = ???

// is not computed yet. not materialized.
println(s1.take(takeN))

// always return the same thing
println(s1.take(takeN).toList)
println(s1.take(takeN).toList)
println(s1.take(takeN).toList)

val r1 = s1.take(takeN).sum
assert(r1 == 90, r1)

// SECOND STREAM //
println("- Second stream -")

def stream2(n: Int = 0): LazyList[Int] = {
  LazyList
    .from(n)
    .map(a => a * increment)
}
val s2: LazyList[Int] = stream2(startN)

// can take less
println(s2.take(6).take(5).take(4).toList)
// cannot take more
println(s2.take(4).take(5).take(6).toList)

val r2 = s2.take(takeN).sum
assert(r2 == 90, r2)

// FACTORIAL //
println("- Factorial -")

// without stream
def factorial(n: Int): Int = {
  if (n == 0) ???
  else n * factorial(n - 1)
}

// with stream
def factorialStream(n: Int): Int = {
  // all those 'val' would be removed in production code. This is just for the exercise.
  val start: Int = ???
  val takeN: Int = ???
  def multiply(a: Int, b: Int): Int = ???
  LazyList
    .from(start)
    .take(takeN)
    .foldLeft(1)(multiply)
}

(0 to 10).foreach { n =>
  val f: Int = factorial(n)
  val fs: Int = factorialStream(n)
  println(s"$f == $fs")
  assert(f == fs)
}

println(
  "Congratulations ! 'The secret of getting ahead is getting started.' - Mark Twain"
)
