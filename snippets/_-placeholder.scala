// Learn more about Scala on https://leobenkel.com

def add(a: Int, b: Int): Int = {
  println(s"$a + $b")
  ???
}

{ // Partial Functions
  println("Partial function:")
  val add2_1: Int => Int = add(_, 2)
  val add2_2: Int => Int = add(2, _)

  val input_r: Int = ???
  val r_1: Int = add2_1(input_r)
  val r_2: Int = add2_2(input_r)
  println(r_1)
  println(r_2)
  assert(r_1 == r_2)
}

{ // list - transformations
  println("Transformations:")
  val ll: List[Int] = (0 until ???).toList
  println(ll)

  val ll_add1: List[Int] = ll.map(n => n + 1)
  val ll_add1_1: List[Int] = ll.map(_ + 1)
  println(ll_add1)
  println(ll_add1_1)
  assert(ll_add1 == ll_add1_1)
}

{ // transformation with tuples
  println("Transformations tuples:")
  val ll: List[(Int, Int)] = ((0 until 10) zip (5 until 15)).toList
  println(ll)

  val ll_add_1: List[Int] = ll.map { case (a, b) => ??? }
  println(ll_add_1)
  val ll_add_2: List[Int] = ll.map(a => a._1 + a._2)
  println(ll_add_2)

  assert(ll_add_1 == ll_add_2)
}

{ // accumulators
  println("Accumulators:")
  val ll: List[Int] = (0 until 10).toList
  println(ll)

  val ll_sum_1: Int = ll.sum
  println(ll_sum_1)

  val ll_sum_2: Int = ll.foldLeft(0) { case (acc, current) => ??? }
  println(ll_sum_2)

  val ll_sum_3: Int = ll.foldLeft(0)(_ + _)
  println(ll_sum_3)

  val ll_sum_4: Int = ll.reduce((acc, cur) => ???)
  println(ll_sum_4)

  val ll_sum_5: Int = ll.reduce(_ + _)
  println(ll_sum_5)

  val all_results = List(ll_sum_1, ll_sum_2, ll_sum_3, ll_sum_4, ll_sum_5)
  assert(all_results.forall(_ == ll_sum_1), all_results)
}

println(
  "Congratulations ! 'If your ship doesn’t come in, swim out to meet it!' – Jonathan Winters"
)
