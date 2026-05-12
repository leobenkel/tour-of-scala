// Learn more about Scala on https://leobenkel.com

val startR: Int = ???
val endR: Int = ???
val stepR: Int = 3
val l: List[Int] = (startR until endR by stepR).toList
println(l)

val startFold: Int = ???
// try to replace '(a, b) => a + b' by '_ + _'
val r1: Int = l.foldLeft(startFold)((a, b) => a + b)
assert(r1 == 64, r1)

val factor: Int = ???

def isEven(n: Int): Boolean = n % factor == 0

val r2 = l.foldLeft(List.empty[Int]) {
  case (accumulator, n) if isEven(n)  => accumulator :+ (n / factor)
  case (accumulator, n) if !isEven(n) => accumulator :+ (n * factor)
}

assert(r2 == List(0, 6, 3, 18, 6, 30, 9), r2)

println(
  "Congratulations ! 'If you're going through hell, keep going.' - Franklin D. Roosevelt"
)
