// Learn more about Scala on https://leobenkel.com

val input: Option[Int] = Some(1)
println(input)

val mapped: Option[Int] = input.map(a => ???)
println(mapped)

val result: Int = mapped.getOrElse(0)

assert(result == 2)

println(
  "Congratulations ! There are no pressure to be happy, take your time."
)
