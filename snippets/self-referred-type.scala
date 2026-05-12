// Learn more about Scala on https://leobenkel.com
{
  trait Combinable {
    def |+|(other: Combinable): Combinable
  }

  case class AverageInt(value: Int) extends Combinable {
    // try to replace the input by 'AverageInt' instead of 'Combinable'
    override def |+|(other: Combinable): AverageInt =
      // the 'asInstanceOf' is dangerous because evaluated at Runtime
      AverageInt((value + other.asInstanceOf[AverageInt].value) / 2)
  }

  {
    val a: AverageInt = AverageInt(???)
    val b: AverageInt = AverageInt(???)
    val r: Int = (a |+| b).value
    assert(r == 3)
  }

  {
    case class ConcatStrings(value: String) extends Combinable {
      override def |+|(other: Combinable): ConcatStrings =
        ConcatStrings((value + other.asInstanceOf[ConcatStrings].value))
    }
    // uncomment the lines below, the compiler is not stopping us from doing this. But we have runtime error.
    // val a: ConcatStrings = ConcatStrings("a")
    // val b: AverageInt = AverageInt(4)
    // val r: String = (a |+| b).value
  }
}

{
  trait Combinable[A <: Combinable[A]] {
    def |+|(other: A): A
  }

  case class AverageInt(value: Int) extends Combinable[AverageInt] {
    override def |+|(other: AverageInt): AverageInt =
      AverageInt((value + other.value) / 2)
  }

  {
    val a: AverageInt = AverageInt(???)
    val b: AverageInt = AverageInt(???)
    val r: Int = (a |+| b).value
    assert(r == 3)
  }

  case class ConcatStrings(value: String) extends Combinable[ConcatStrings] {
    override def |+|(other: ConcatStrings): ConcatStrings =
      ConcatStrings((value + other.value))
  }

  {
    // uncomment the lines below, the compiler now stop us from doing this.
    // val a: ConcatStrings = ConcatStrings("a")
    // val b: AverageInt = AverageInt(4)
    // val r: String = (a |+| b).value
  }

  {
    // nothing stop us from doing this
    case class AddInt(value: Int) extends Combinable[ConcatStrings] {
      override def |+|(other: ConcatStrings): ConcatStrings =
        ConcatStrings((value.toString + other.value))
    }

    // and the compiler dont see any problem now. Even worse than before because no error anywhere, just bad result.
    val a: AddInt = AddInt(???)
    val b: ConcatStrings = ConcatStrings(???)
    val r = (a |+| b).value
    println(r)
  }
}

{
  // With this, we keep all the advantages of the test above, feel free to cut and paste them in this block.
  trait Combinable[A <: Combinable[A]] { this: A =>
    def |+|(other: A): A
  }

  // uncomment below, the compiler now does not allow us to do this
  // case class AddInt(value: Int) extends Combinable[ConcatStrings] {
  //   override def |+|(other: ConcatStrings): ConcatStrings =
  //     ConcatStrings((value.toString + other.value))
  // }
}

println(
  "Congratulations ! 'Just one small positive thought in the morning can change your whole day.' - Dalai Lama"
)
