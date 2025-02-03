const { Router } = require("express");
const prisma = require("../database")

const router = Router()

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany()
  res.status(201).json(posts)
})

router.post("/", async (req, res) => {
  const createPost = await prisma.post.create({
    data : {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      authorId : req.body.authorId
    }
  })
  res.status(201).json(createPost)
})

router.get("/:id", async (req, res) => {
  const post = await prisma.post.findUnique({where: {id: +req.params.id}})
  res.json(post)
})

router.put("/:id", async (req, res) => {
  const {title, content, published} = req.body
  const updatePost = await prisma.post.update({
    data: {
      title,
      content,
      published,
    },
    where: {id: +req.params.id}
  })
  res.json(updatePost)
})

router.delete("/:id", async (req, res) => {
 const deletePost = await prisma.post.delete({where: {id: +req.params.id}})
 res.json(deletePost)
})


module.exports = router