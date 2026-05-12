// Learn more about Scala on https://leobenkel.com

import scala.util.Random

{
  // Create a random generator
  val rand = new Random()

  println("Random Int:")
  println(rand.nextInt())

  // Try different values
  val maxRand = ???
  println(s"Random Int lower than $maxRand:")
  println(rand.nextInt(maxRand))
}

// Utilities to generate "random" numbers
object RandomUtils {
  // the seed
  val seed = 0
  // initialize the random generator
  private val rand = new Random(seed)

  def randomInt(min: Int, max: Int): Int = {
    rand.nextInt(max - min) + ???
  }
}

val minRand = 10
val maxRand = 20
println(
  s"Random number between $minRand and $maxRand with seed ${RandomUtils.seed}:"
)
println(RandomUtils.randomInt(minRand, maxRand))

val output = RandomUtils.randomInt(13, 200)
assert(output == 41, output)

for {
  min <- 0 to 1000
  max <- 0 to ???
  if min < max
} {
  val randomNumber = RandomUtils.randomInt(min, max)
  assert(randomNumber >= min)
  assert(randomNumber < max)
}

println("Congratulations ! Keep moving forward.")
