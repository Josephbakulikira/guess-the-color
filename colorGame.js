var numberOfsquares = 6;
var colors = generateRandomColors(numberOfsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = PickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Display = document.getElementById("h1Display");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function()
{
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfsquares = 3;
	colors = generateRandomColors(numberOfsquares);
	pickedColor = PickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];

		}else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function()
{
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfsquares = 6;
	colors = generateRandomColors(numberOfsquares);
	pickedColor = PickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfsquares);
	pickedColor = PickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i]; 
	}
	h1Display.style.backgroundColor = "#4682b4";
	messageDisplay.textContent = "";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) 
{
	
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add event listener
    squares[i].addEventListener("click", function()
    	{
    		//grab color of clicked square
    		var clickedcolor = this.style.backgroundColor;
    		//compare color to picked color
    		if(clickedcolor === pickedColor)
    			{
    				
    				resetButton.textContent = "Play Again";
    				messageDisplay.textContent = "Correct";
    				changeColors(clickedcolor);
    				h1Display.style.backgroundColor = pickedColor;
    			}
    			else
    			{
    				this.style.backgroundColor = "#232323";
    				messageDisplay.textContent = "Try Again";
    			}
    	});
}
function changeColors(color)
{
	for (var i = 0; i < squares.length; i++) {
		//change every color to match
			squares[i].style.backgroundColor = color;
		}	
}
function PickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	var arr = []
	for(var i = 0; i < num; i++)
	{
		arr.push(Randomcolor());
	}
	return arr;
}

function Randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", "+ g + ", " + b + ")";
}