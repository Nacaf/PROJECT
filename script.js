console.log(2 * 4 === 8);
//1
let numberOfFilms = +prompt("Skolko filmov vi uje posmotreli", "");
console.log(numberOfFilms);

let a = prompt("Odin iz poslednix prosmotrennix filmov?"),
  b = prompt("Na skolko ocenite ego?"),
  c = prompt("Odin iz poslednix prosmotrennix filmov?"),
  d = prompt("Na skolko ocenite ego?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
