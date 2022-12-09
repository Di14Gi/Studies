const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


for(let i = 0; i < 2; i++){
    const questionOne = prompt('Один из последних фильмов', '');
    const questionGrade = +prompt('На сколько оцените его', '');

    if(questionOne != null && questionGrade != null && questionOne !='' && questionGrade != '' && questionOne.length < 50){
        personalMovieDB.movies[questionOne] = questionGrade;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }    
}


if(personalMovieDB.count <= 10){
    console.log('Просмотрено довольно мало фильмов')
}else if(personalMovieDB.count <= 30){
    console.log('Вы классический зритель')
}else if(personalMovieDB.count > 30){
    console.log('Вы киноман')
}else {
    console.log('Ошибка')
}


console.log(personalMovieDB);



