const knight = function createKnight() {

};

const gameBoard = function createGameBoard() {
    let length = 8;
    let width = 8;
    let gameBoardArr = [];
    let counter = 1;
    let num = 0;

    function addNumbers(arr){
        if(counter < length){
            arr.push(num);
            counter++
        } else {
            counter = 1;
            arr.push(num);
            num++;
        };
    };

    for(let j = 0; j < length*width; j++) {
        let newArr = [];
        addNumbers(newArr);
        gameBoardArr.push(newArr);
    };

    let counter2 = 1;
    let num2 = 0;

    function addSecondNumber(arr){
        if(counter2 < length){
            arr.push(num2);
            counter2++
            num2++
        } else {
            counter2 = 1;
            arr.push(num2);
            num2 = 0;
        };
    };

    gameBoardArr.forEach((element) => addSecondNumber(element));

    return gameBoardArr;
};

let board = gameBoard();
console.log(board)