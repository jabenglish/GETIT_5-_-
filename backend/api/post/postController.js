const express = require("express");
const router = express.Router();
const postService = require("./postService");

const createPost = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    console.log(`createPost - title: ${title}, description: ${description}`);
    const post = await postService.create(title, description);
    res.status(200).json(post);
  } catch (err) {
    res.status(404);
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id); // URL 매개변수에서 id 가져오기
    console.log(`getPost - postId: ${id}`);
    const post = await postService.getOne(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404);
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    console.log("getAll");
    const post = await postService.getAll();
    res.status(200).json(post);
  } catch (err) {
    res.status(404);
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { postId, title, description } = req.body;
    console.log(
      `updatePost - postId: ${postId}, title: ${title}, description: ${description}`
    );
    const post = await postService.update(postId, title, description);
    res.status(200).json({ massage: "성공" });
  } catch (err) {
    res.status(404);
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postId } = req.body;
    console.log(`deletePost - postId: ${postId}`);
    const post = await postService.deletePost(postId);
    res.status(200).json({ massage: "성공" });
  } catch (err) {
    res.status(404);
    next(err);
  }
};

const makeImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const post = await postService.makeImage(prompt);
    console.log(`make Image - prompt: ${prompt}`);
    res.status(200).json(post);
  } catch (err) {
    res.status(404);
    next(err);
  }
};

router.get("/getOne/:id", getPost);
router.get("/getAll", getAll);
router.post("/postCreate", createPost);
router.post("/postUpdate", updatePost);
router.post("/postDelete", deletePost);
router.post("/createImage", makeImage);
module.exports = router;
