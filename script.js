var quotes = [
	"is a waste of your time.",
	"is not worth the stress.",
	"is a dipshit!!1!",
	"is not fit to occupy your thoughts.",
	"is rude AF.",
	"is blind.",
	"is a true asshole.",
	"is an extreme disappoinment to humanity.",
	"is stupid.",
	"can eat a pile of poo.",
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
	"is an actual piece of poo. 💩",
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
	"messed with your head. Drop him NOW.",
	"is someone you need to STOP thinking about.",
	"is actually a clown. He's IT.",
	"hurt you.",
	"is a pathetic little wimp.",
	"is not the right person to be with.",
	"is a fuckboy. do re mi fa so fucking done with you boy.",
	"is a little boy.",
	"is crazy.",
	"be playin games with you.",
	"is the worst.",
	"doesn't give a frick about you.",
	"can't fuck with you because you're a BADASSSSSS 😉",
	"is a stupid hoe.",
	"plays too many damn games.",
	"made you just an option, so forget about him.",
	"is totally not good enough for you.",
	"is way out of your league.",
	"only thinks with his 🍆.",
	"is not that into you.",
	"is NOT going to make you happy.",
	"doesn't realize how cool 😎 you are!",
	"is just a thing you need to forget.",
	"is a fool. Fly, you fools!",
	"has probably lied to you many times.",
	"took advantage of you.",
	"is a piece of dust, too little to occupy your thoughts. Time to clean!",
	"doesn't take time to get to know you.",
	"treats you like shit. Stop spending time on people who don't care about you.",
	"is super disrespectful to you!",
	"is really insecure.",
	"just has a bunch of issues you shouldn't have to deal with.",
	"just wanted to mess around with you.",
	"is just an unimportant blob.",
	"should be NONEXISTENT to you.",
	"sucks ass.",
	"stepped all over you 😕.",
	"pulled out your heart, threw it on the ground, and stomped on it.",
	"is not an honest person.",
	"makes you sad. Why do you want him?",
	"makes you feel shitty.",
	"makes you feel like you did something wrong, but you didn't.",
	"makes you wait.",
	"makes you frustrated all the time.",
	"is trash.",
	"is toxic."


]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}