function randMath(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};
const getMovies = (min, max) => {
  const movies = {
    movie1: randMath(min, max),
    movie2: randMath(min, max),
  };

  if (movie1 === movie2) {
    getMovies(min, max);
  } else {
    return movies;
  }
};

module.exports = {randMath, getMovies};

