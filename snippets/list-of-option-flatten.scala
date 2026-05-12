// Learn more about Scala on https://leobenkel.com

{ // List
  println(">> List")

  // create list of list
  val l: List[List[Int]] = List(List(???), List(???))
  println(l)
  assert(l.length == 2)
  assert(l(0).length == 2)

  // flatten to list
  val lFlatten1: List[Int] = l.flatten
  println(lFlatten1)
  assert(lFlatten1.length == 5)

  // transform and flatten
  val lFlatten2: List[Int] = l.map(_.map(_ + 1)).flatten
  println(lFlatten2)

  // transform and flatten in one operation
  val lFlatten3: List[Int] = l.flatMap(_.map(_ + 1))
  println(lFlatten3)

  assert(lFlatten2.sum == lFlatten3.sum)
}

{ // Option
  println(">> Option")

  // create option of option | Try with 'None' and 'Some'
  val opt: Option[Option[Int]] = Some(???)
  println(opt)
  assert(opt.isDefined)

  // flatten to option
  val optFlatten1: Option[Int] = opt.flatten
  println(optFlatten1)

  // transform and flatten
  val optFlatten2: Option[Int] = opt.map(_.map(_ + 1)).flatten
  println(optFlatten2)

  // transform and flatten in one operation
  val optFlatten3: Option[Int] = opt.flatMap(_.map(_ + 1))
  println(optFlatten3)

  assert(optFlatten1.isEmpty == optFlatten3.isEmpty)
}

{ // List of Option
  println(">> List[Option[Int]]")

  // create list of option
  val a: List[Option[Int]] = List(Some(???), None, ???)
  println(a)
  assert(a.length == 4)

  // flatten to list
  val aFlatten1: List[Int] = a.flatten
  println(aFlatten1)
  assert(aFlatten1.length == 2)

  // transform and flatten
  val aFlatten2: List[Int] = a.map(_.map(_ + 1)).flatten
  println(aFlatten2)

  // transform and flatten in one operation
  val aFlatten3: List[Int] = a.flatMap(_.map(_ + 1))
  println(aFlatten3)
  assert(aFlatten2.sum == aFlatten3.sum)
  assert(aFlatten3.sum == 6)
}

println(
  "Congratulations ! 'There is no traffic jam along the extra mile.' - Roger Staubach"
)
