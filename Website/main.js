var app = angular.module("HangmanApp", []);
app.controller("GameController", ['$scope', '$timeout', function($scope, $timeout){

    var words = [
        "dog",
        "bug",
        "kid",
        "bid",
        "tug",
        "frog",
        "pugs",
        "sparrow"
    ];

    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    $scope.input = {
        letter : ''
    };

    var selectRandomWord = function(){
        var index = Math.round(Math.random() * (words.length -1));
        return words[index];
    }

    var newGame = function(){
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guesses = 6;
        $scope.displayWord = '';

        selectedWord = selectRandomWord();
        console.log(selectedWord);
        var tempDisplayWord = '';
        
        for (let i = 0; i < selectedWord.length; i++){
            tempDisplayWord += '*';
        }
        $scope.displayWord = tempDisplayWord;
    }

    $scope.letterChosen = function(){
        for (let i = 0; i < $scope.correctLettersChosen; i++){
            if($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                $scope.input.letter = "";
                return;
            }
        }

        for (let i = 0; i < $scope.incorrectLettersChosen; i++){
            if($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                $scope.input.letter = "";
                return;
            }
        }

        var correct = false;
        for (let i = 0; i < selectedWord.length; i++){
            if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                $scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i + 1);
                correct = true;
            }
        }

        if(correct){
            $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
        }else{
            $scope.guesses--;
            $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
        }
        $scope.input.letter = "";
        if($scope.guesses == 0){
            alert("You got hung boiiii");
            $timeout(function(){
                newGame();
            }, 500);
        }
        //Indexof searches for * in the array
        if($scope.displayWord.indexOf("*") == -1){
            alert("You WIN!");
            $timeout(function(){
                newGame();
            }, 500);
        }
    }

    newGame();

}])