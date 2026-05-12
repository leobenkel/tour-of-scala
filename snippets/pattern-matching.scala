// Learn more about Scala on https://leobenkel.com

type L = List[Int]

val startR: Int = ???
val endR: Int = 10
val l: L = (startR to endR).toList
println(l)

val l1: L = l.map {
  case 0          => ???
  case n if n < 5 => n + 4
  case n if n < 8 => n - 3
  case _          => ???
}
println(l1)
val expected1: Int = ???
assert(l1.sum == expected1, l1)

def transform(input: L, f: Int => Int): L = {
  def loop(accumulator: L, rest: L): L = {
    println(s"acc: $accumulator")
    rest match {
      case Nil          => accumulator
      case head :: tail => loop(accumulator :+ f(head), tail)
    }
  }
  loop(Nil, input)
}

val l2: L = transform(l1, a => a + 1)
println(l2)
val expected2: Int = ???
assert(l2.sum == expected2, l2)

println(
  "Congratulations ! 'If you can dream it, you can do it.' – George S. Patton"
)
