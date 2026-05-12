// Learn more about Scala on https://leobenkel.com

{ // Require type proof
  trait Foo[A]

  object Foo {
    def apply[A](): Foo[A] = new Foo[A] {}
  }

  object ValidFoos {
    implicit val FooInt: Foo[Int] = Foo[Int]()
    implicit val FooString: Foo[String] = ???
  }
  import ValidFoos._

  def isValidFoo[A: Foo](a: A): A = {
    println(s"'${a.toString}' is a valid Foo")
    ???
  }

  val a: Int = isValidFoo[Int](???)
  assert(a == 3)
  val b: String = isValidFoo[String](???)
  assert(b == "abc")
  
  // Try commenting this out, then fix it.
  // val c: Double = isValidFoo(1.2)
}

{ // With access to the proof
  def sum[A](a: A, b: A)(implicit num: Numeric[A]): A = {
    println(s"$a + $b")
    num.plus(a, ???)
  }

  val r1: Int = sum[Int](???, ???)
  println(r1)
  assert(r1 == 4)
  val r2: Double = sum[Double](???, ???)
  println(r2)
  assert(r2 == 0.6)
  val r3: Long = sum[Long](???, ???)
  println(r3)
  assert(r3 == 7867)
}

println(
  "Congratulations ! 'Being strong means rejoicing in who you are, complete with imperfections.' - Margaret Woodhouse"
)
