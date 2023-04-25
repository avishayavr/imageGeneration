const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apikey: process.env.OPENAI_API_KEY,
});

const dotenv = require("dotenv");
dotenv.config();

exports.massage = async (req, res, next) => {
  try {
    res.send("Hello from DALLE-e!");
  } catch (error) {
    next(error);
  }
};

exports.newImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await OpenAIApi.createImage({
      prompt,
      p: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    next(error);
  }
};
