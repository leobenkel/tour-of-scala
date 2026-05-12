// Learn more about Scala on https://leobenkel.com

val opt: Option[Int] = Some(???)

val outOpt: Option[Int] = opt.flatMap {
  case n if n > 3 => Some(???)
  case 1          => Some(???)
  case _          => None
}

assert(outOpt == Some(3))

val l: List[Int] = ??? :: ??? :: Nil

val outList: List[Int] = l.flatMap {
  case n if n == 2 => List(1, 2, 3)
  case n if n == 3 => n :: n :: Nil
  case n if n < 5  => n :: Nil
  case _           => Nil
}

assert(outList.length == 4)

println("Congratulations ! Go beyond.")
