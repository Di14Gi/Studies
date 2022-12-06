const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const questionOne = prompt('Один из последних фильмов', '');
const questionGrade = +prompt('На сколько оцените его', '');
const questionSecond = prompt('Один из последних фильмов', '');
const questionSecondGrade = +prompt('На сколько оцените его', '');


personalMovieDB.movies[questionOne] = questionGrade;
personalMovieDB.movies[questionSecond] = questionSecondGrade;

console.log(personalMovieDB);



