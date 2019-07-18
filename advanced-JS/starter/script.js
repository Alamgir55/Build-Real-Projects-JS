

// function Question(question, answer, correct){
//     this.question = question;
//     this.answer = answer;
//     this.correct = correct;
// }

// Question.prototype.displayQA = function(){
//     console.log(this.question);
//     for(let i = 0; i<this.answer.length; i++){
//         console.log(i + ':' +this.answer[i]);
//     }
// }
// Question.prototype.correctAnswer = function(ans){
//     if(ans === this.correct){
//         console.log('This is the Correct Answer');
//     }else{
//         console.log('Worng Answer!');
//     }
// }


// const q1 = new Question('Do you wanna to college?', ['yes', 'no'], 0);

// const q2 = new Question('Do you wanna to study in CS?', ['yes', 'no'], 0);

// const q3 = new Question('Do you wanna work on outsourcing?',['no', 'yes'], 1);

// let  questions = [q1, q2, q3];

// let n = Math.floor(Math.random() * questions.length);

// questions[n].displayQA();

// const answer = parseInt(prompt("Please answer the Question?"));

// questions[n].correctAnswer(answer);

(function(){
    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    Question.prototype.displayQS = function(){
        console.log(this.question);
        for(let i = 0; i<this.answer.length; i++){
            console.log(i + ':' + this.answer[i]);
        }
    }
    Question.prototype.displayAS = function(ans, callback){
        let sc;
        if(ans === this.correct){
            console.log('THis the correct Answer');
           sc = callback(true);
        }else{
            console.log('Worng is it!');
           sc = callback(false);
        }
        this.displaySC(sc);
    }
    Question.prototype.displaySC = function(score){
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }

    function score(){
        let sc = 0;
        return function(correct){
            if(correct){
                sc++
            }
            return sc;
        }
    }
    let keepScore = score();

    
    const q1 = new Question('Do you wanna ride a bike?', ['yes', 'no'], 1);
    const q2 = new Question('DO you wanna pass the  TASC soon?', ['yes', 'no'], 2);
    
    let questions = [q1, q2];

    function nextQuestion(){
        let n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQS();
        
        let answer = prompt('Please Answer the Question?');
        
        if(answer !== 'exit'){
            questions[n].displayAS(parseInt(answer), keepScore);    

            nextQuestion();
        }
    }

    nextQuestion();    
})();

