// Learn more about Scala on https://leobenkel.com

object Foo {
  val visibilityPublic = "a"

  private val visibilityPrivate = "b"
}

// try to use 'visibilityPrivate'.
val result: String = ???

assert(result == "a")

println("Congratulations ! You can change the world.")
