(function(){
    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQS = function(){
        console.log(this.question);
        for(let i = 0; i< this.answer.length; i++){
            console.log(i + ':' + this.answer[i]);
        }
    }
    Question.prototype.displayAS = function(ans, callback){
        let sc;
        if(ans === this.correct){
            console.log('Correct Answer!!');
           sc = callback(true);
        }else{
            console.log('Wrong Answer');
           sc = callback(false);
        }
        this.displaySC(sc);
    }
    Question.prototype.displaySC = function(sc){
        console.log('Your Socore is :'+ sc );
        console.log('-------------------');
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

    const q1 = new Question('What do you want?', ['nothing', 'something'], 0);
    const q2 = new Question('Do you want some help?', ['yes', 'no'], 0);
    
    let questions = [q1, q2];
    
    function nextQS(){
        
        let n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQS();
        
        let answer = prompt('Please answer the question?');

        if(answer !== 'exit'){
            questions[n].displayAS(parseInt(answer), keepScore);
            nextQS();
        }
    }
    nextQS();

})();



