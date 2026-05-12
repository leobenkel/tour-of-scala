// Learn more about Scala on https://leobenkel.com

val s1: Set[Int] = Set(6, 0, 2, ???, 1)
println(s1)
val s2: Set[Int] = (0 to ??? by 2).toSet
println(s2)

val s: Set[Int] = s1 ++ s2
println(s)

val increment: Int = ???
val result = s.map(a => a + increment).sum

assert(result == 38, result)

println(
  "Congratulations ! 'The secret of getting ahead is getting started.' - Mark Twain"
)
