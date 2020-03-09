class Mind {

	
	constructor(){
		this.thoughts = []
		this.currentThought = null
	}

	hasThought(thought){
		// filter thoughts by thought.name
		const matchingThoughts = this.thoughts.filter(t => t.name === thought.name)
		return matchingThoughts.length > 1
	}

	addThought(thought){
		if(!this.hasThought(thought))
			this.thoughts.push(thought)
	}

	removeThoughtByName(name){
		// filter out thoughts with that name
		this.thoughts = this.thoughts.filter(thought => thought.name !== name)
		
	}

	thinkAboutAThought(){
		// pick thought with highest probability
		this.currentThought =  this.thoughts[0]? this.thoughts[0]: null
		this.thoughts.forEach(thought => {
			if(thought.probability > this.currentThought.probability)
				this.currentThought = thought
		})
	}
}

module.exports = Mind