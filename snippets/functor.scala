// Learn more about Scala on https://leobenkel.com

trait Functor[F[_]] {
  def map[A, B](fa: F[A])(f: A => B): F[B]
}

case class Pair[A](m: A, n: A) {
  def map[B](f: A => B): Pair[B] = Pair.map(this)(???)
}

object Pair extends Functor[Pair] {
  def map[A, B](fa: Pair[A])(f: A => B): Pair[B] = {
    Pair[B](f(fa.m), ???)
  }
}

{
  val p: Pair[Int] = Pair(???, ???)
  println(p)
  assert(p.m == 3)
  assert(p.n == 5)
  val r: Pair[Int] = p.map(???)
  println(r)
  assert(r.m == 4)
  assert(r.n == 6)
}

{
  val p: Pair[String] = Pair(???, ???)
  println(p)
  assert(p.m == "hello")
  assert(p.n == "world!")
  val r: Pair[Int] = p.map(???)
  println(r)
  assert(r.m == 5)
  assert(r.n == 6)
}

println(
  "Congratulations ! 'I never dreamed about success. I worked for it.' - Estee Lauder"
)
