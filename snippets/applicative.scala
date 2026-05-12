// Learn more about Scala on https://leobenkel.com

// Functor and Applicative //

trait Functor[F[_]] {
  def map[A, B](fa: F[A])(f: A => B): F[B]
}

trait Applicative[F[_]] extends Functor[F] {
  def pure[A](a: A): F[A]

  def applicate[A, B](f: F[A => B])(a: F[A]): F[B]

  final override def map[A, B](a: F[A])(f: A => B): F[B] =
    applicate[A,B](pure[A => B](???))(???)
}

//////////

// Example //

trait Box[+A] {
  def map[B](f: A => B): Box[B] = Box.map(this)(???)

  def isDefined: Boolean
  def open: A
}

case class FilledBox[A](v: A) extends Box[A] {
  final lazy val isDefined: Boolean = ???
  final lazy val open: A = ???
}
case object EmptyBox extends Box[Nothing] {
  final lazy val isDefined: Boolean = ???
  final lazy val open: Nothing =
    throw new Exception("The box was empty!")
}

object Box extends Applicative[Box] {
  def apply[A](): Box[A] = EmptyBox
  def apply[A](a: A): Box[A] = pure(a)

  def pure[A](a: A) = FilledBox[A](???)

  def applicate[A, B](ff: Box[A => B])(fa: Box[A]): Box[B] = {
    fa match {
      case EmptyBox => EmptyBox
      case FilledBox(a) =>
        ff match {
          case EmptyBox     => ???
          case FilledBox(f) => FilledBox(???)
        }
    }
  }
}

////////

// usages //
{ // works like a Functor when defined
  val b: Box[Int] = ???
  println(b)
  assert(b.isDefined)
  assert(b.open == 2)
  val r = b.map(???)
  println(r)
  assert(r.isDefined)
  assert(r.open == 4)
}

{ // works like a Functor when not defined
  val b: Box[Int] = ???
  println(b)
  assert(!b.isDefined)
  val r = b.map(???)
  println(r)
  assert(!r.isDefined)
}

{ // the real power of Applicative
  val fa: Box[String] = Box(???)
  val fb: Box[Int] = Box(???)
  def f(a: String, b: Int): String = List.fill(???)(a).mkString(" ")

  println(fa)
  println(fb)

  val fab: Box[Int => String] = fa.map(a => (i: Int) => ???)

  val r: Box[String] = Box.applicate[Int, String](???)(???)
  println(r)
  assert(r == Box("abc abc abc"))
}

println(
  "Congratulations ! 'Find out who you are and do it on purpose.' - Dolly Parton"
)
