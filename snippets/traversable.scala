// Learn more about Scala on https://leobenkel.com

// Functor, Applicative and Traversable //

trait Functor[F[_]] {
  def map[A, B](fa: F[A])(f: A => B): F[B]
}

trait Applicative[F[_]] extends Functor[F] {
  def pure[A](a: A): F[A]

  def applicate[A, B](f: F[A => B])(a: F[A]): F[B]

  final override def map[A, B](a: F[A])(f: A => B): F[B] =
    applicate[A, B](pure[A => B](f))(a)
}

trait Traversable[F[_]] extends Applicative[F] {
  final def traverse[A, B](la: List[A])(f: A => F[B]): F[List[B]] = {
    la.foldLeft(pure(List.empty[B])) { case (acc, element) =>
      val fb: F[B] = f(???)
      val fCombine: F[B => List[B]] = map(???)((l: List[B]) => (a: B) => l :+ a)
      val output: F[List[B]] = applicate(???)(???)
      output
    }
  }

  // 'x => x' has a shortcut in Scala: 'identity' , try replacing it.
  final def sequence[A](lfa: List[F[A]]): F[List[A]] = traverse(???)(a => a)
}

//////////

// Example //

case class Box[A](v: A)

object Box extends Traversable[Box] {
  def pure[A](a: A) = Box[A](???)

  def applicate[A, B](ff: Box[A => B])(fa: Box[A]): Box[B] = Box(ff.v(???))
}

////////

// usages //
{ // traverse
  println("-Traverse-")
  val input: List[Int] = ???
  println(input)
  assert(input.length == 4)

  val output: Box[List[String]] = Box.traverse(input) {
    case 1               => ???
    case n if n % 2 == 0 => ???
    case a               => Box("x" * a)
  }
  println(output)
  assert(output.v.length == 4)
}

{ // sequence
  println("-Sequence-")
  val input: List[Box[Int]] = ???
  println(input)
  assert(input.length == 4)

  val output: Box[List[Int]] = Box.sequence(???)
  println(output)
  assert(output.v.length == 4)
}

////////

println(
  "Congratulations ! 'What would you do if you weren’t afraid?' - Sheryl Sandberg"
)
