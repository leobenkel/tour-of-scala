// Learn more about Scala on https://leobenkel.com

val l: List[Int] = List(1, 2, ???, 4)

val ll: List[List[Int]] = l.map(a => List(a - 1, a, a + 1))
println(s"Map: $ll")

val flatList: List[Int] = ll.flatten
println(s"Flat: $flatList")

val sum: Int = ???

assert(sum == 30, sum)

println("Congratulations ! Hapiness = Reality - Expectation")
