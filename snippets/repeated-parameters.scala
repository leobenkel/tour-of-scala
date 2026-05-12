// Learn more about Scala on https://leobenkel.com

case class AnnoyingInput(l: List[Int]) {
  lazy val sum = l.sum
}

case class NiceLookingInput(l: Int*) {
  lazy val sum = l.sum
}

val a1: AnnoyingInput = AnnoyingInput(List(1, ???, 3))
val b1: NiceLookingInput = NiceLookingInput(1, 2, ???)
println(a1)
println(b1)
assert(a1.sum == b1.sum)

val input: List[Int] = List(1, ???, ???)

val a2: AnnoyingInput = AnnoyingInput(input)
val b2: NiceLookingInput = NiceLookingInput(input: _*)
assert(a2.sum == b2.sum)

println(
  "Congratulations ! 'It always seems impossible until it's done.' - Nelson Mandela"
)
