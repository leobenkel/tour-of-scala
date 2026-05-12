// Learn more about Scala on https://leobenkel.com

// Functor, Applicative and Monad //

trait Functor[F[_]] {
  def map[A, B](fa: F[A])(f: A => B): F[B]
}

trait Applicative[F[_]] extends Functor[F] {
  def pure[A](a: A): F[A]
  def applicate[A, B](f: F[A => B])(fa: F[A]): F[B]
}

trait Monad[F[_]] extends Applicative[F] {
  def flatten[A](ffa: F[F[A]]): F[A]

  def flatMap[A, B](fa: F[A])(f: A => F[B]): F[B] = {
    val ffb: F[F[B]] = map(???)(???)
    val fb: F[B] = flatten(???)
    fb
  }

  final override def applicate[A, B](f: F[A => B])(fa: F[A]): F[B] = {
    flatMap(???) { (fab: A => B) =>
      map(???)(fab(_))
    }
  }
}

// USAGE //

sealed abstract class Box[+A](val isDefined: Boolean)

implicit object BoxMonad extends Monad[Box] {
  final override def map[A, B](fa: Box[A])(f: A => B): Box[B] = {
    fa match {
      case FilledBox(a) => pure(f(???))
      case EmptyBox     => ???
    }
  }

  final override def pure[A](a: A): Box[A] = FilledBox(???)

  final override def flatten[A](ffa: Box[Box[A]]): Box[A] = {
    ffa match {
      case FilledBox(fa) => ???
      case EmptyBox      => EmptyBox
    }
  }

}

implicit class BoxMonadUtil[A](ba: Box[A])(implicit m: Monad[Box]) {
  def map[B](f: A => B): Box[B] = m.map(???)(???)
  def flatMap[B](f: A => Box[B]): Box[B] = m.flatMap(???)(???)

  def filter(p: A => Boolean): Box[A] = ba.flatMap {
    case a if p(a) => FilledBox(???)
    case _         => EmptyBox
  }
}

case class FilledBox[A](v: A) extends Box[A](true)

case object EmptyBox extends Box[Nothing](false)

// EXAMPLES //

{
  println("- example 1")
  val box: Box[Int] = FilledBox(???)
  println(box)
  assert(box.isDefined)

  val box1: Box[Int] = box.map(_ * 2)
  println(box1)
  assert(box1.isDefined)
  box1.map { a =>
    assert(a == 8)
  }
}

{
  println("- example 2")
  val box: Box[Int] = FilledBox(???)
  println(box)
  assert(box.isDefined)

  val box1: Box[String] = box.flatMap {
    case a if a % 2 == 0 => FilledBox("even")
    case a if a % 3 == 0 => FilledBox("three")
    case a if a > 10     => FilledBox("unknown")
    case _               => EmptyBox
  }
  println(box1)
}

{
  println("- example 3")
  val box: Box[Int] = FilledBox(???)
  println(box)
  assert(box.isDefined)

  val box1: Box[Int] = box.filter(_ > 3)
  println(box1)
  assert(!box1.isDefined)
}

println(
  "Congratulations ! 'Blame it or praise it, there is no denying the wild horse in us.' - Virginia Woolf"
)
