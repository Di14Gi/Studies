let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}



function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const questionOne = prompt('Один из последних фильмов', '').trim();
        const questionGrade = +prompt('На сколько оцените его', '');
    
        if(questionOne != null && questionGrade != null && questionOne !='' && questionGrade != '' && questionOne.length < 50){
            personalMovieDB.movies[questionOne] = questionGrade;
            console.log('done');
        }else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms()



function detectPersonalLevel() {
    if(personalMovieDB.count <= 10){
        console.log('Просмотрено довольно мало фильмов')
    }else if(personalMovieDB.count <= 30){
        console.log('Вы классический зритель')
    }else if(personalMovieDB.count > 30){
        console.log('Вы киноман')
    }else {
        console.log('Ошибка')
    }
}

detectPersonalLevel()



function showMyDB(hidden) {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB)


function writeYourGenres() {    
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
        
    }
}

writeYourGenres()




