// Learn more about Scala on https://leobenkel.com

object Implicits {
  implicit class IntExtra(val i: Int) extends AnyVal {
    def isEven: Boolean = i % (??? : Int) == 0
    def increaseByN(n: Int = 1): Int = i + n
  }

  implicit class ListExtra(list: List[Int]) {
    def everyNMap(n: Int)(f: Int => Int): List[Int] = {
      list.zipWithIndex.map {
        case (element, i) if i % n == 0 => f(element)
        case (element, _)               => element
      }
    }
  }
}

import Implicits._

val listEnd: Int = ???

val input: List[Int] = (0 to listEnd).toList
println(input)

val output: List[Int] = input
  .filter(_.isEven)
  .everyNMap(???)(_.increaseByN(???))

println(output)

val result: Int = output.sum
val expected: Int = 60
assert(result == expected, result)

println(
  "Congratulations ! 'It does not matter how slowly you go as long as you do not stop.' – Confucius"
)
