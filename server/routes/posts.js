import express from "express"
import { getPosts, createPost, deletePost, updatePost, likePost } from "../controllers/posts.js" // in node .js is required!!!

const router = express.Router()

//in index.js we added the /posts to the root route
router.get("/", getPosts)
router.post("/", createPost)
router.delete("/:id", deletePost)
router.patch("/:id", updatePost)
router.patch("/:id/likePost", likePost)

export default router
