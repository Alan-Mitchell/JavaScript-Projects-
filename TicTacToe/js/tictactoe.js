//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares =[]

//This function is for placing an x or o in a square.
function placeXorO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some(method) is used to check each element of selectedSquares array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(elenemnt => element.includes(squareNumber))) {
        //The variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who turn it is.
        if (activePlayer === "X") {
            //If activve player is equal to "X", the x.png is placed in the HTML
            select.style.backgroundImage ='url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            // if activePlayer is equal to 'O' the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumbers and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditons.
        checkWInConditions();
        //This condition is for chnaging the active player. 
        if (activePlayer === 'X') {
            //if active player is "X" change it to "O"
            activePlayer = "O";
            //If activePlayer is anything other than "X"

        }
    } else {
        //change the active player to "X"
        activePlayer = "X";
        }
        //This function plays placement sound.
        Audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer === "O") {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before computer places image and enables click.
            setTimeout(function(){computersTurn(); }, 1000)
        
        }
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn(){
        //This boolean is needed for our whole loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success){
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random nummber evaluated returns true, the square hasnt been selected yet
            if (placeXorO(pickASquare)){
                //This line calls the function.
                placeXorO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            
            };
        }
    }

    //This function parses the slectedSquares array to search for win conditions.
    //drawWinLine function is called to draw line if condition is met.
    function checkWInConditions(){
        //x,0,1,2 condition
        if (arrayIncludes('0X','1X','2X')) {drawWinLine(50, 100, 558, 100)}
        //x,3,4,5 condition.
        else if (arrayIncludes('3X', '4X','5X')) {drawWinLine(50, 304, 558, 304)}
        // x 6 7 8 condition 
        else if (arrayIncludes('6X', '7X','8X')) {drawWinLine(50, 508, 508, 508)}
        //x 0 3 6 conditions 
        else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
        // x 1 4 7 
        else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304, 50, 304, 558)}
        //x 2 5 8 conditons 
        else if (arrayIncludes('2X', '5X','8X')) {drawWinLine(508, 50, 508, 558)}
        // x 6 4 2 conditions 
        else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
        // x 0 4 8 conditions 
        else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
        // o 0 1 2 conditions 
        else if (arrayIncludes('0O','1O', '2O')) {drawWinLine(50, 100, 558, 100)}
        // 0 3 4 5 condtions 
        else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
        //O 6 7 8 conditions 
        else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508, 558, 508)}
        // O 0 3 6 conditins 
        else if (arrayIncludes ('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
        //o 1 4 7 conditons
        else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
        // O 2 5 8 conditons 
        else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(500, 50, 508, 558)}
        // O 6 4 2 conditions 
        else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 100, 520, 520)}
        //O 6 4 8 conditions
        else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
        //This condition checks for tie. If none of the above conditions register and 9 
        //sqaures are seleceted the code executes 
        else if (selectedSquares.length>=9) {
            //This function plays the tie game sound.
            Audio('./media/tie.mp3');
            //this function sets a . 3 second timer before the resetGame is called.
            setTimeout(function () {resetGame();}, 1000);
        }
        //This function checks if an array includes 3 strings. It is used to check for 
        //each win condition 
        function arrayIncludes(squareA, squareB, squareC) {
            //These 3 variables will be used to check for 3 in a row.
            const a = selectedSquares.includes(squareA)
            const b = selectedSquares.includes(sqaureB)
            const c = selectedSquares.includes(squareC)
            //If the 3 variables we pass are all included in our array true is 
            //returned and our else if condition executes the drawWInLine function.
            if (a === true && b=== true && c === true) {return true}
        }
    }
    
