// Learn more about Scala on https://leobenkel.com

// Utilities
object Round {
  def apply(d: Double, precision: Int = 2): Double = {
    val pow = Math.pow(10, precision)
    Math.round(???) / ???
  }
}

trait Displayable {
  def display: String
}

// Items:
sealed abstract class Item(name: String, price: Double)
    extends Displayable {
  lazy val display: String = s"${this.name.capitalize}\t${???}"
}

// case object of Items:
case object Carrot extends Item("Carrot", ???)
// and Bread, Lemon, ...

// Rows of grocery list :
case class GroceryListRow(item: Item, quantity: Int) extends Displayable {
  lazy val cost: Double = ???
  lazy val display: String =
    s"${item.display}\t\t${???}\t\t${???}"
}

case class Groceries(items: List[GroceryListRow]) extends Displayable {
  lazy val totalCost: Double = ???

  lazy val display: String =
    "Name\tPrice per Unit\t???\t???\n" +
      items.map(_.display).mkString(???) +
      s"\nTotal cost: ${???}\n" +
      "-------------------"

  def add(item: GroceryListRow): Groceries =
    this.copy(items = ???)
}

object Groceries {
  def build(items: GroceryListRow*): Groceries = Groceries(???)
}

// Test Items
{
  assert(Carrot.name == "carrot")
  assert(Carrot.price == 0.4)
  assert(Carrot.display == "Carrot\t0.4", Carrot.display)
}
// Test Rows
{
  val testRow = GroceryListRow(Carrot, 2)
  assert(testRow.cost == 0.8)
  assert(testRow.item == Carrot)
  assert(testRow.display == s"${Carrot.display}\t\t2\t\t0.8", testRow.display)
}
// Test Cart
{
  val testCart = Groceries.build(
    GroceryListRow(Carrot, 3),
    GroceryListRow(Lemon, 5)
  )
  assert(testCart.totalCost == 3.7, cart.totalCost)
  println(testCart.display)
  assert(testCart.display.contains("Name"))
  assert(testCart.display.contains("Price per Unit"))
  assert(testCart.display.contains("Quantity"))
  assert(testCart.display.contains("Total Price"))
  assert(testCart.display.contains(Carrot.display))
  assert(testCart.display.contains(Lemon.display))
  assert(testCart.display.contains(testCart.totalCost.toString))
}

// Use cart
val cart = Groceries
  .build(
    GroceryListRow(Carrot, 3),
    ???
  )
  .add(GroceryListRow(Apple, 3))
  .add(GroceryListRow(Lemon, 5))
  .add(GroceryListRow(Bread, 1))
  .add(GroceryListRow(???, ???))

println(cart.display)
assert(cart.totalCost == 30)

println(
  "Congratulations ! 'The question isn’t who is going to let me, it’s who is going to stop me' - Ayn Rand"
)
