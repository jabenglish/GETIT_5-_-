const { where } = require("sequelize");
const { Post } = require("../../models");

const { OpenAI } = require('openai');

const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

const create = async (title, description) => {
  try {
    const post = await Post.create({
      title: title,
      description: description
    });
    return post.data;
  } catch (err) {
    console.error("postService.create error");
    throw err;
  }
};

const getOne = async (postId) => {
  try {
    const post = await Post.findOne({
      where: {
        postId: postId,
      },
    });
    console.log(post);
    return post;
  } catch (err) {
    console.error("postService.getOne error");
    throw err;
  }
};

const getAll = async () => {
  try {
    const post = await Post.findAll({});
    console.log(post);
    return post;
  } catch (err) {
    console.error("postService.getAll error");
    throw err;
  }
};

const update = async (postId, title, description) => {
  try {
    const post = await Post.update(
      {
        title: title,
        description: description,
      },
      {
        where: { id: postId },
      }
    );
  } catch (err) {
    console.error("postService.update error");
    throw err;
  }
};

const deletePost = async (id) => {
  try {
    const post = await Post.destroy({
      where: { postId: id },
    });
  } catch (err) {
    console.error("postService.delete error");
    throw err;
  }
};

const makeImage = async (inputPrompt) => {
  try {
    const response = await openai.images.generate({
      prompt: inputPrompt,
    });
    return response.data;
  } catch (err) {
    console.error('postService.makeImage error');
    throw err;
  }
};

module.exports = {
    getOne,
    create,
    getAll,
    update,
    deletePost,
    makeImage,
};