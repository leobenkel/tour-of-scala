// Learn more about Scala on https://leobenkel.com

trait Foldable[F[_]] {
  def fold[A, B](fa: F[A])(start: B)(f: (B, A) => B): B
}

sealed abstract class Node[A](val v: A) {
  def fold[B](start: B)(f: (B, A) => B) = ???
}
case class Chain[A](override val v: A, next: Node[A]) extends Node[A](???) {
  override final lazy val toString: String = s"$v -> ${next.toString}"
}
case class Tail[A](override val v: A) extends Node[A](???) {
  override final lazy val toString: String = v.toString
}

object Node extends Foldable[Node] {
  def apply[A](v: A): Node[A] = Tail(v)
  def apply[A](v: A, next: Node[A]) = ???

  def fold[A, B](fa: Node[A])(start: B)(f: (B, A) => B): B = {
    def loop(n: Node[A], acc: B): B = {
      n match {
        case Tail(v)        => ???
        case Chain(v, rest) => loop(rest, ???)
      }
    }

    loop(???, ???)
  }
}

{
  val chain: Node[Int] = Node(???, ???)
  println(chain)

  val r: Int = chain.fold[Int](???)(_ + _)
  println(r)
}

{
  val chain: Node[String] = Node(???)
  println(chain)
  val r1: String = chain.fold("") {
    case ("", v)  => ???
    case (acc, v) => s"$acc ${v.capitalize}"
  }
  println(r1)
  assert(r1 == "Hello World !")

  val r2 = chain.fold(0)(_ + _.length)
  println(r2)
  assert(r2 == ???)
}

println(
  "Congratulations ! 'Be deliberate and afraid of nothing.' - Audre Lorde"
)
