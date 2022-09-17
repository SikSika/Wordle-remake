

const normal = [
"YouTube",
"Instagram",
"facebook",
"Discord",
"Whatsapp",
"TikTok",
"Snapchat",
"Pinterest",
"Twitter",
"Reddit",
];



let answer = "";
let guessed = [];
let workProgress = null;

function randomWord() {
	answer = normal[Math.floor(Math.random()*normal.length)].toUpperCase();
	console.log(answer);
};

function guess(letter_chose) {
	guessed.indexOf(letter_chose) === -1? guessed.push(letter_chose):null;
	document.getElementById(letter_chose).setAttribute("disabled", true);

	if (answer.indexOf(letter_chose >= 0)) {
		guessed_word();
		end();
	}
};

function keyBoard() {
	let ButtonHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => 
		`<button class="btn btn-lg btn-info" id="${letter}" onclick="guess('${letter}')">${letter}</button>`).join("");
	console.log(ButtonHTML);
	document.getElementById("keyboard").innerHTML = ButtonHTML;
};

function end() {
	if (workProgress === answer) {
		document.getElementById("keyboard").innerHTML = "YOU GUESSED IT WOO";
	}
};

function guessed_word() {
	workProgress = answer.split("").map(letter => (
		guessed.includes(letter)?letter:" _ ")).join("");

	document.getElementById("workProgress").innerHTML = workProgress;
};

function restart() {
	answer = "";
	guessed = [];
	workProgress = null;
	randomWord();
	keyBoard();
	guessed_word();
}


document.addEventListener("DOMContentLoaded", ()=>{
	restart();
});



