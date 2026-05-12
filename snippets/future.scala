// Learn more about Scala on https://leobenkel.com

// imports
import java.util.concurrent.TimeUnit
import scala.util.Try
import scala.concurrent.duration.Duration
import scala.concurrent.{
  Await,
  ExecutionContext,
  ExecutionContextExecutor,
  Future
}

implicit val ex: ExecutionContextExecutor = ExecutionContext.global

println(">> Start exercise")

// making futures
// notice the type `=> Int`
def createCompute(name: String)(operation: => Int): Future[Int] = {
  Future {
    println(s"Start $name")
    val output = operation
    println(s"Done $name")
    output
  }
}

// start as soon as created
val f1: Future[Int] = createCompute("f1") {
  Thread.sleep(100)
  ???
}
// support map and all the other flatMap, ...
val f2: Future[Int] = createCompute("f2") {
  Thread.sleep(50)
  ???
}.map(a => a + 1)

// chained together
val fTotal = for {
  f1Result <- f1
  // not running in parallel
  f3Result <- createCompute("f3") {
    Thread.sleep(50)
    ???
  }
  f4Result <- createCompute("f4") {
    Thread.sleep(50)
    ???
  }
  f5Result <- createCompute("f5") {
    Thread.sleep(50)
    ???
  }
  f2Result <- f2
} yield {
  f1Result + f2Result + f3Result + f4Result + f5Result
}

// try different wait time
val outputTotal: Int =
  Await.result(fTotal, Duration(???, TimeUnit.MILLISECONDS))

assert(outputTotal == 15, outputTotal)

// Future can be dangerous
println(">> Start Part 2")

val f: Future[Int] = Future {
  println("start")
  // On a second run, try reducing this number
  Thread.sleep(1500)
  // this will print, Future are not cancellable
  println("finish")
  ???
}

// or increase this number
val output: Int =
  Try(Await.result(f, Duration(1, TimeUnit.SECONDS))).getOrElse(5)

Thread.sleep(750)

assert(output == 1, output)

println(
  "Congratulations ! 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.' – Samuel Beckett"
)
