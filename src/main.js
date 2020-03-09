const mindReaders = require('./mindReaders')
const Thought = require('./thought')
const Mind = require('./mind')


function readMind(rank, mindReader, mind) {
	let tries = 1
	while (mindReader.readMind(mind).name !== mind.currentThought.name){
		tries ++
	}
	console.log(`The ${rank} mind reader took ${tries} tries to successfully read a mind.`)
}


function generateRandomThoughts(n){
	const thoughts = []
	for(let i =0; i < n; i++){
		thoughts.push(new Thought(Math.random().toString(), Math.random()))
	}
	return thoughts
}

function simulateMindReading(){
	const thoughts = generateRandomThoughts(10)
	console.log(`Using ${thoughts.length} thoughts.\n\n`)
	// create mind
	const mind = new Mind()

	// add thoughts
	thoughts.forEach(thought => mind.addThought(thought))

	// create mind readers
	const terribleMindReader = mindReaders.createTerribleMindReader()
	const perfectMindReader = mindReaders.createPerfectMindReader()
	const goodMindReader = mindReaders.createGoodMindReader()

	// get the mind to think
	mind.thinkAboutAThought()
	

	// let each mind reader take a shot at reading the mind
	readMind("terrible", terribleMindReader, mind)
	readMind("good", goodMindReader, mind)
	readMind("perfect", perfectMindReader, mind)
}

simulateMindReading()
