// Learn more about Scala on https://leobenkel.com

type ArticleId = Int
type AuthorId = Int
type Date = Long

case class ArticleRow(
    id: ArticleId,
    authorId: AuthorId,
    content: String,
    numberOfLikes: Int = 1,
    lastUpdateDate: Date
) {
  def like(): ArticleRow = this.copy(numberOfLikes = this.numberOfLikes + 1)

  def updateContent(
      content: String = this.content,
      authorId: AuthorId = this.authorId
  ): ArticleRow = this.copy(content = content, authorId = authorId)

  override def toString: String = "Article(" +
    s"id:$id, " +
    s"author:$authorId, " +
    s"content:'$content', " +
    s"likes:$numberOfLikes, " +
    s"date:$lastUpdateDate" +
    ")"
}

val article: ArticleRow = ArticleRow(
  id = 1,
  authorId = ???,
  content = ???,
  lastUpdateDate = 123L
)
println(article)
assert(article.content == "bar")

val likedArticle: ArticleRow = article.like().like()
println(likedArticle)
assert(likedArticle.numberOfLikes == 5)

val copyArticle = likedArticle.copy(id = ???)
println(copyArticle)
assert(copyArticle.id == 4)

val updateContent = copyArticle.updateContent(content = ???)
println(updateContent)
assert(updateContent.content == "foo")

println("Congratulations ! 'Hold the vision, trust the process.' – Unknown")
