// Learn more about Scala on https://leobenkel.com

{
  case class Node(value: Int, connections: List[Node] = Nil) {
    lazy val connectionsCount = connections.length
  }

  val tree = Node(
    1,
    ???
  )
  assert(tree.value == 1)
  assert(tree.connectionsCount == 2)
  assert(tree.connections.head.connections.head.connections.head.value == 4)
}

{
  class Node(val value: Int, val connections: List[Node] = Nil) {
    lazy val connectionsCount = connections.length
  }

  object N {
    def apply(value: Int, connections: Node*): Node =
      new Node(???, ???)
  }

  val tree = N(
    ???,
    ???
  )
  assert(tree.value == 1)
  assert(tree.connectionsCount == 2)
  assert(tree.connections.head.connections.head.connections.head.value == 4)

  val listNode: List[Node] = (0 until 10).map(N(_)).toList

  val tree2 = N(???, listNode: _*)
  assert(tree2.value == 1)
  assert(tree2.connectionsCount == ???)
}

println(
  "Congratulations ! 'It is never too late to be what you might have been.' - George Eliot"
)
