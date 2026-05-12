// Learn more about Scala on https://leobenkel.com

val tuple2: (Int, Option[Int]) = ???

val (r1, _) = tuple2
println(r1)
assert(r1 == 3)

val (_, r2) = tuple2
println(r2)
assert(r2 == Some(4))

val (_, Some(r3)) = ???
println(r3)
assert(r3 == 4)

// try different values here
val a @ "abc": String = ???

println(
  "Congratulations ! 'If you persevere long enough, if you do the right things long enough, the right things will happen.' - Manon Rheaume"
)
