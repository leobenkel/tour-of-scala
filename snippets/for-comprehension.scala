// Learn more about Scala on https://leobenkel.com

case class Row(id: Int, list: List[Int])

val howManyInput: Int = ???
val howManyListItem: Int = ???

val input: List[Row] = (0 to howManyInput)
  .map(i => Row(i, list = (0 to howManyListItem).toList))
  .toList

val modFilter: Int = ???
val increase: Int = ???

val output1: List[Int] = input.flatMap {
  case Row(id, list) =>
    list.flatMap(n =>
      List(id, n)
        .withFilter(i => id + n % modFilter == 0)
        .map(_ + increase)
    )
}
val output1Sum = output1.sum
println(output1Sum)

val output2: List[Int] = for {
  Row(id, list) <- input
  n <- list
  i <- List(id, n)
  if id + n % modFilter == 0
} yield {
  i + increase
}
val output2Sum = output2.sum
println(output2Sum)

assert(output1Sum == output2Sum, output1Sum)
assert(output1 == output2)
val expected: Int = ???
assert(output1Sum == expected, output1Sum)

println(
  "Congratulations ! 'Knowing is not enough; we must apply. Willing is not enough; we must do.' – Johann Wolfgang von Goethe"
)
