// Learn more about Scala on https://leobenkel.com

// creating list
{
  // create a list
  val l1: List[Int] = List(???)
  println(l1)
  assert(l1 == List(1, 2, 3))

  // create a list with the '::' syntax
  val l2: List[Int] = 7 :: 6 :: ??? :: Nil
  println(l2)
  assert(l2.length == 3)

  // combine list
  val l3: List[Int] = l1 ++ l2
  println(l3)
  assert(l3.length == 6)

  // +: and :: are equivalent when it comes to create list

  // prepend one or more element to list
  val l4: List[Int] = ??? +: 3 +: l3
  println(l4)
  assert(l4(0) == 2)

  // prepend one or more element to list
  val l5: List[Int] = ??? :: 5 :: l4
  println(l5)
  assert(l5(0) == 2)

  // append one or more element to list
  val l6: List[Int] = l5 :+ 5 :+ ???
  println(l6)
  assert(l6.length == ???, l6.length)
}

// pattern matching with list
{
  def processList(l: List[Int]): Int = {
    l match {
      case Nil                          => 0
      case a :: Nil                     => a
      case a :: b :: Nil                => a + b
      case a :: b :: tail if a + b == 5 => 5
      case a :: 3 :: 4 :: tail          => tail.length * 2
      case a :: b :: c :: Nil           => 3
      case 1 :: tail                    => tail.length + 2
      case head :: tail                 => head
      case _                            => -1
    }
  }

  assert(processList(???) == -1)
  assert(processList(???) == 0)
  assert(processList(???) == 1)
  assert(processList(???) == 2)
  assert(processList(???) == 3)
  assert(processList(???) == 4)
  assert(processList(???) == 5)
  assert(processList(???) == 6)
  assert(processList(???) == 7)
}

println(
  "Congratulations ! 'The best time to plant a tree was 20 years ago. The second best time is now.' - Chinese Proverb"
)
