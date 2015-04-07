//Define a variable here called currentTurn and make it equal to the STRING "X"
var currentTurn = "X"; // Starts off with "x"
var TTT = {  // function to change element after each turn
	changeElement: function(piece) {
		if (currentTurn === "X") {
			$("#" + piece).html("X");
			
			this.checkWin();
			
			//Make currentTurn equal to "O"
			currentTurn = "0"
		} else {
			$("#" + piece).html("O");
			
			this.checkWin();
			
			//Make currentTurn equal to "X"
			currentTurn = "X"
		}
	},
	
	checkWin: function() {    
		var rowA = [$("#a1").html(), $("#a2").html(), $("#a3").html()];
		var rowB = [$("#b1").html(), $("#b2").html(), $("#b3").html()];
        var rowC = [$("#c1").html(), $("#c2").html(), $("#c3").html()];
		var colA = [$("#a1").html(), $("#b1").html(), $("#c1").html()];
		var colB = [$("#a2").html(), $("#b2").html(), $("#c2").html()];
		var colC = [$("#a3").html(), $("#b3").html(), $("#c3").html()];
		var diagOne = [$("#a1").html(), $("#b2").html(), $("#c3").html()];
		var diagTwo = [$("#a3").html(), $("#b2").html(), $("#c1").html()];
		
		function sayWinner() {
			alert( currentTurn + ' Wins!');

		}

		//Write a function here called sayWinner() that will alert the current turn letter plus the word "Wins". An example could be X Wins! Or O Wins!
		if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		} else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		} else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		}
		
		if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		} else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		} else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		}
		
		if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		} else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== "") {
			//Call the function sayWinner here
			sayWinner();
		}

	} 


}; 

$(".game-board td").on("click", function() {
	
	// console.log('clicked');

	if ($(this).html() !== "") {   // NOT NOTHING (i.e something)
		alert("Spot taken!");
		//Write an alert here that says "This spot has been taken...Sorry!"
		return false;
	} else {   // NOTHING
		var gamePiece = $(this).attr("id");
		TTT.changeElement(gamePiece);
		//Call the function TTT.changeElement passing in the above variable (gamePiece) as a parameter
	}
});
