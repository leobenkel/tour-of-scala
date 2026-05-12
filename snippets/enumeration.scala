// Learn more about Scala on https://leobenkel.com

object Ores {
  sealed abstract class Ore(val pricePerKg: Double)

  // https://www.dailymetalprice.com/metalprices.php
  case object Iron extends Ore(0.1235)
  case object Gold extends Ore(61350.05)
  case object Zinc extends Ore(2.3970)
}
import Ores._

val o: Ore = ???

val result = o match {
  case Iron => 1
  case Gold => 2
}
assert(result == 3, result)


case class Box(ore: Ore, mass: Double) {
  lazy val value: Double = ore.pricePerKg * mass

  override def toString = s"[$ore x ${mass}Kg]"
}

val boxes = List(
  Box(???, ???),
  Box(???, ???),
  Box(Nickel, 1),
  Box(???, 3),
  Box(Iron, ???),
  Box(Zinc, 2),
  Box(Gold, ???),
  Box(Godl, 1)
)

val totalWeight = boxes.map(_.mass).sum
assert(totalWeight == 25, totalWeight)

val totalValue = boxes.map(_.value).sum

val totalWeightGold = boxes.filter(_.ore == Gold).map(_.mass).sum
assert(totalWeightGold == 5, totalWeightGold)

val totalWeightNickel = boxes.filter(_.ore == Nickel).map(_.mass).sum
assert(totalWeightNickel == 5, totalWeightNickel)

println(s"Shipment: $boxes")
println(s"Total weight: ${totalWeight}Kg | Total Value: $$${totalValue}")
boxes.groupBy(_.ore).foreach {
  case (Iron, boxes) => println(s"- a lot of iron")
  case (ore, boxes) =>
    val totalWeight = boxes.map(_.mass).sum
    val totalValue = boxes.map(_.value).sum
    println(
      s"- $ore: Total weight: ${totalWeightGold}Kg | Total Value: $$${totalWeightNickel}"
    )
}
println(
  "Congratulations ! 'Many of us never realize our greatness because we become sidetracked by secondary activities' - Less Brown"
)
