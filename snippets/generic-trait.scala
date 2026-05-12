// Learn more about Scala on https://leobenkel.com

trait Combine[A] {
  def combineWith(a: A): A
}

case class PotatoBag(weight: Double) extends Combine[PotatoBag] {
  override def combineWith(otherBag: PotatoBag): PotatoBag =
    PotatoBag(this.weight + otherBag.weight)
}

case class TruckOfPotatoes(potatoBags: PotatoBag*) {
  lazy val totalWeight: Double =
    potatoBags
      .reduceOption((a, b) => a.combineWith(b))
      .map(_.weight)
      .getOrElse(???)
}

val truck: TruckOfPotatoes = TruckOfPotatoes(???)

val totalWeigth = truck.totalWeight

assert(totalWeigth == 18.1, totalWeigth)

println(
  "Congratulations ! 'Set your goals high, and don't stop till you get there.' - Bo Jackson"
)
