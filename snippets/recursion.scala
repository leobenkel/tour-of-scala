// Learn more about Scala on https://leobenkel.com

def sumUpTo(until: Int): Int = {
  def loop(n: Int = 0, acc: Int = 0): Int = {
    if (n >= until) n + acc
    else loop(n + 1, acc + n)
  }

  loop()
}

val result: Int = sumUpTo(???)
val expected: Int = ???
assert(result == expected, result)

println(
  "Congratulations ! 'Knowing is not enough; we must apply. Willing is not enough; we must do.' - Johann Wolfgang von Goethe"
)
