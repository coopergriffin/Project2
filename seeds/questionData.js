const { Question } = require("../models");

const questionData = [
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
  {
    content: "",
    movie_id: 1,
  },
];

const seedQuestions = () => Question.bulkCreate(questionData);
module.exports = seedQuestions;
