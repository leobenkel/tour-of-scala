// Learn more about Scala on https://leobenkel.com

// 1) pattern matching 1
{
  val input: String = ???
  val result: Int = input match {
    case "abc" => ???
    case _     =>
      // match on anything else
      ???
  }
  assert(result == 1, result)
}

// 2) pattern matching 2
{
  val input: Option[String] = Some(???)
  val result: Int = input match {
    case None    => ???
    case Some(_) =>
      // match on anything as long as it is a Some(...)
      ???
  }
  assert(result == 2, result)
}

// 3) pattern matching 3
{
  case class User(id: Int, name: String, age: Int)

  val input: User = ???
  val result: Int = input match {
    // we only care about some fields
    case User(_, _, 30)          => ???
    case User(_, _, n) if n > 30 => ???
    case _                       =>
      // match on everything else
      ???
  }
  assert(result == 2, result)
}

// 4) import all
{
  import scala.util._
  // everything inside the package 'scala.util' is available
  val r: Int = Try(???) match {
    case Success(v) => ???
    case Failure(f) => throw f
  }
  assert(r == 3, r)
}

// 5) ignore val
{
  // we don't care of the output
  val a: Int = ???
  val _: Int = a
}

// 6) ignore output
{
  val r: Option[Int] = for {
    a: Int <- Some(???)
    _ = println("step 1 complete")
    b: Int <- Some(???)
    _ = println("step 2 complete")
    _: Int <- Some(???)
    r = a + b
  } yield r
  assert(r == Some(3), r)
}

// 7) map
{
  val l: List[Int] = ???
  val ll: List[Int] = l.map(_ => 1)
  println(ll)
  val r: Int = ll.sum
  assert(r == 4, r)
}

println(
  "Congratulations ! 'Pain is temporary. Quitting lasts forever.' – Lance Armstrong"
)
