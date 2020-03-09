
class MindReader {

	constructor(errorMargin){
		this.errorMargin = errorMargin
	}

	readMind(mind){
		const thoughts = mind.thoughts
		
		// try to pick thought with highest probability
		let selectedThought =  thoughts[0]? thoughts[0]: null
		let randomThought = Math.floor(Math.random() * thoughts.length)
		thoughts.forEach(thought => {
			if(thought.probability > selectedThought.probability)
				selectedThought = thought
		})

		const chance = Math.random()
		if(chance < this.errorMargin)
			return randomThought

		return selectedThought
	}
}



module.exports = {
	createPerfectMindReader: () => new MindReader(0),
	createGoodMindReader: () => new MindReader(0.87),
	createTerribleMindReader: () => new MindReader(0.999),
	MindReader: MindReader
}