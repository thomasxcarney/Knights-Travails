const knight = function createKnight() {
    const knightMoves = function knightMoves(start, end) {
        function createArr(start, visitedNodesArr) {
            let arr = [];
            addMoves(start, arr, visitedNodesArr);
            return arr;
        };
    
        function addMoves(start, arr, visitedNodesArr) {
            let boardCopy = [...board];
            if(visitedNodesArr){
                boardCopy = boardCopy.filter(val => !visitedNodesArr.includes(val));
            };
            for(let i = 0; i < boardCopy.length; i++){
                if((((boardCopy[i][0] == start[0]+2) || (boardCopy[i][0] == start[0]-2)) && 
                ((boardCopy[i][1] == start[1]+1) || (boardCopy[i][1] == start[1]-1))) || 
                ((boardCopy[i][1] == start[1]+2) || (boardCopy[i][1] == start[1]-2)) && 
                ((boardCopy[i][0] == start[0]+1) || (boardCopy[i][0] == start[0]-1))) {
                    arr.push(boardCopy[i]);
                };
            };
        };

        const node = function node(data, parentNode) {
            let value = data;
            let nextNode = null;
            let parent = parentNode;
            return {
                value, nextNode, parent
            };
        };

        let possibleMoves = createArr(start);
    
        function routeToEnd(moves = possibleMoves){
            let answer = [start];
            let visitedNodes = [];
            let queue = [];
            let endNode = findPath();
            function findPath(array = moves){
                let endNode;
                for(let i = 0; i < array.length; i++){
                    let newNode = node(array[i], start);
                    queue.push(newNode);
                    visitedNodes.push(array[i]);
                };
                for(let i = 0; i < queue.length; i++){
                    let currentParent = queue[i];
                    let nextNodeArr = createArr(currentParent.value, visitedNodes);
                    visitedNodes.push(currentParent.value);
                    for(let i = 0; i < nextNodeArr.length; i++){
                        let nextNode = node(nextNodeArr[i], currentParent);
                        queue.push(nextNode);
                    } if(queue[i].value.toString() == end.toString()){
                        endNode = queue[i];
                        return endNode;
                    };  
                };
            };
            let steps = 0;
            while(endNode.parent != null){
                answer.splice(1, 0, endNode.value);
                endNode = endNode.parent;
                steps++;
            };
            console.log('You made it in ' + steps + ' moves! Here\'s your path:');
            console.log(answer);
        };
        routeToEnd();
    };
    return { knightMoves };
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

    function pushNumToBoard(){
        for(let j = 0; j < length*width; j++) {
        let newArr = [];
        addNumbers(newArr);
        gameBoardArr.push(newArr);
        };
    };
    pushNumToBoard();

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

const board = gameBoard();
const myKnight = knight();

myKnight.knightMoves([3, 3], [4, 3]);
