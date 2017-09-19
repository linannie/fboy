var quotes = [
	"is a waste of your time.",
	"is not worth the stress.",
	"is a dipshit!!1!",
	"is not fit to occupy your thoughts.",
	"is rude AF.",
	"is blind.",
	"is a true asshole.",
	"is an extreme disappoinment to humanity.",
	"is stupid",
	"can eat a pile of poo",
	"is holding you back from progressing forward.",
	"really missed out BIG TIME.",
	"is dumb.",
	"is NOT WORTH IT.",
	"is a mistake.",
	"is a demon.",
	"doesn't care about you.",
	"doesn't care about your well being.",
	"put you as a low priority.",
	"doesn't deserve you AT ALL.",
	"is really shitty.",
	"is a lowlife.",
	"an actual piece of poo. 💩",
	"can go eat some dirt.",
	"is only using you.",
	"doesn't realize how great you are.",
	"is leading you a step closer to the right guy.",
	"led you on.",
	"pretends to genuinely like you.",
	"is screwing you over.",
	"ain't shit.",
	"is a horrible horrible horrible person.",
	"is incredibly immature.",
	"messed with your mind. Drop him NOW.",
	"is someone you need to STOP thinking about.",
	"is actually a clown. He's IT.",
	"hurt you.",
	"is a pathetic little wimp"


]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}