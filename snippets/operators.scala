// Learn more about Scala on https://leobenkel.com

{
  // simple operator +/*
  case class Complex(real: Double, imaginary: Double) {
    def +(other: Complex): Complex =
      Complex(
        real = this.real + other.real,
        imaginary = this.imaginary + other.imaginary
      )

    def *(other: Complex): Complex =
      Complex(
        real = this.real * other.real - this.imaginary * other.imaginary,
        imaginary = this.real * other.imaginary + this.imaginary * other.real
      )

    override final lazy val toString: String =
      s"$real${if (imaginary >= 0) "+" else ""}${imaginary}i"
  }

  val cA: Complex = Complex(???, ???)
  val cB: Complex = Complex(???, ???)
  val r: Complex = ???
  println(r)
  assert(r.real == 6)
  assert(r.imaginary == 8)
}

{ // stranger ones
  case class Node(s: String) {
    // |+| is the traditional operator for "combine"
    def |+|(other: Node): Node = Node(this.s + ???)

    // this is invented
    def \/(other: Node): Node = Node(s"$s/${other.s}")
    def /(other: Node): Node = Node(???)

    def unary_! = Node(s.reverse)
  }

  val a: Node = Node(???)
  val b: Node = Node(???)
  val r1: Node = a |+| b
  println(r1)
  assert(r1.s == "ab")

  val r2: Node = a \/ b
  val r3: Node = a / b
  println(r2)
  assert(r2.s == "a/b")
  assert(r3 == r2)

  val r4: Node = !r1
  println(r4)
  assert(r4.s == ???)
}

{ // unary
  case class Value(i: Double) {
    def unary_- = Value(-1 * i)
    def unary_+ = Value(i + 1)
    def unary_~ = Value(Math.round(i).toDouble)
  }

  val v: Value = Value(???)
  val r1: Value = -v
  println(r1)
  assert(r1.i == 4.2)

  val r2: Value = +r1
  println(r2)
  assert(r2.i == 5.2)

  val r3: Value = ???
  println(r3)
  assert(r3.i == 5)
}

println(
  "Congratulations ! 'Don’t worry about being successful but work toward being significant and the success will naturally follow.' - Oprah Winfrey"
)
