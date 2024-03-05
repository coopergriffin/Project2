const { Question } = require("../models");

const questionData = [
  {
    content: "Which movie relesed in 1977?",
    movie_id: 1,
  },
  {
    content: "Which movie has the charactor name called Andy?",
    movie_id: 2,
  },
  {
    content: "Which movie did Robert De Niro act?",
    movie_id: 3,
  },
  {
    content: "Which movie directed by Christopher Nolan",
    movie_id: 4,
  },
  {
    content: "Which one is the classic courtroom drama movie?",
    movie_id: 5,
  },
  {
    content: "Which movie has Samuel L. Jackson acted in?",
    movie_id: 6,
  },
  {
    content: "Which movie did Fight Brad Pitt act?",
    movie_id: 7,
  },
];

const seedQuestions = () => Question.bulkCreate(questionData);
module.exports = seedQuestions;
