var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.bold.blueBright('Enter your name ? '));
console.log(chalk.bold.blueBright('Welcome ' + userName + '\n'));
console.log(chalk.bold.yellowBright('This is a Quiz about Game of Thrones\nJust remember that in Game of Thrones you either win or you die !!\n'));
console.log(chalk.bold.yellowBright('Rules :\n1.For every correct answer, You\'ll get a point.\n2.For wrong answer, nothing happens.\n'));


// Questions and Answers
var questionOne = {
    question: 'Which character appears in more episodes than any other? To be precise 67 episodes ?\na.Tyrion Lannister\nb.Jon Snow\nc.Daenerys targaryen',
    answer: 'a'
}

var questionTwo = {
    question: 'What is the name of the huge mercenary army commanded by Daenerys targaryen ?\na.The Army of Dead\nb.The Unsullied\nc.The Golden Knights',
    answer: 'b'
}

var questionThree = {
    question: 'Which character becomes King of Six Kingdoms at the end ?\na.Jon Snow\nb.Sansa Stark\nc.Bran Stark',
    answer: 'c'
}

var questionFour = {
    question: 'How did Joffrey Baratheon died ?\na.Trial by Combat\nb.Poisoned\nc.Fell through the window',
    answer: 'b'
}

var questionFive = {
    question: 'What is the most common phrase in Game of Thrones ?\na.Winter is Coming\nb.Valar morghulis\nc.All men must die',
    answer: 'a'
}

var questionSix = {
    question: 'What is the name of Jon Snow\'s direwolf ?\na.Blast\nb.Cast\nc.Ghost',
    answer: 'c'
}

var questionSeven = {
    question: 'Who trained at the House of Black and White, the training temple of the Faceless men ?\na.Rickon Stark\nb.Arya Stark\nc.Robb Stark',
    answer: 'b'
}

var questionEight = {
    question: 'Which names do Daenerys targaryen also called with ?\na.Khaleesi of the Great Grass Sea,Queen of Meereen,Mother of Dragons,The Unburnt,Breaker of Chains\nb.King in the North,Warden of the North\nc.Queen of the Andals and the First Men,Queen of the Seven Kingdoms,Protector of the Realm',
    answer: 'a'
}

var questionNine = {
    question: 'Which among the following three is the largest and strongest Dragon in Game of Thrones ?\na.Rhaegal\nb.Viserion\nc.Drogon',
    answer: 'c'
}

var questionTen = {
    question: 'Who is the author of Game of Thrones ?\na. George RR Martin\nb. J.R.R.Tolkien\nc. J.K.Rowling',
    answer: 'a'
}



// To calculate the score
var score = 0;

// To store and display high scores
var highScore = [{
        userName: 'Mohan Kumar',
        score: 10
    },
    {
        userName: 'Dr.Who',
        score: '9'
    }
];


// Function to check whether user's answer is correct or not
function checkAnswer(question, answer) {
    console.log(chalk.bold(question));
    var userGivenAnswer = readlineSync.question(chalk.bold('Your option : '));
    if (userGivenAnswer.toUpperCase() === answer.toUpperCase()) {
        score = score + 1;
        console.log(chalk.green('Right Answer'));
        console.log(chalk.green('Your score is ' + score));
        console.log('==============================\n');
    } else {
        console.log(chalk.redBright('Wrong Answer !!'));
        console.log(chalk.redBright('Your score is ' + score));
        console.log('==============================\n');
    }
}

// Questions Array
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];


for (i = 0; i < questions.length; i++) {
    currentQuestion = questions[i];
    checkAnswer(currentQuestion.question, currentQuestion.answer);
}

//
if (score === highScore[0].score) {
    highScore.unshift({
        userName,
        score
    });
} else {
    highScore.push({
        userName,
        score
    });
}

console.log(chalk.bold.bgBlueBright('Leadership Board :\n'));
for (j = 0; j < highScore.length; j++) {
    console.log(chalk.bold.yellowBright(highScore[j].userName + '   ' + highScore[j].score));
}

console.log(chalk.bold.greenBright('P.S: If your\'s the high score, then send me a screenshot !!'))