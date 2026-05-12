// Learn more about Scala on https://leobenkel.com

1

val a: Int = ???

val b: Int = {
  val a: Int = ???
  val b: Int = ???
  a + b
}

assert(a == 10)
assert(b == 12)

{
  val a: Int = ???
  val b: Int = ???
  assert(a + b == 7)

  {
    val a: Int = ???
    val b: Int = ???
    assert(a + b == 8)

    {
      val b: Int = ???
      assert(a + b == 9)

      {
        assert(a + b == 10)

      }

    }

  }
}

println(
  "Congratulations ! 'Life is 10% what happens to you and 90% how you react to it.' - Charles R. Swindoll"
)
