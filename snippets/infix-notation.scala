// Learn more about Scala on https://leobenkel.com

{
  val a: Int = ???
  val b: Int = ???
  val r: Int = a.+(b)
  assert(r == 17, r)
}

{
  val a: Boolean = ???
  val b: Boolean = false
  val r: Boolean = a.||(b)
  assert(r)
}

{
  case class Foo(a: Int) {
    def combineWith(extraA: Int): Foo = {
      this.copy(a = this.a + extraA)
    }

    def combineWith(other: Foo): Foo = {
      this.copy(a = this.a + other.a)
    }

    def increased: Foo = this.combineWith(1)
  }

  val a: Foo = Foo(???)
  val b1: Int = ???
  val r1: Foo = a combineWith b1
  assert(r1.a == 13)

  val b2: Foo = Foo(b1)
  val r2: Foo = a.combineWith(b2)
  assert(r1.==(r2))
}

println("Congratulations ! 'Failure will never overtake me if my determination to succeed is strong enough.' - Og Mandino")
