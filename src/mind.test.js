const Mind = require('./mind')
const Thought = require('./thought')

describe('Mind', () => {

	it("should be able to add thoughts", () => {

		const mind = new Mind()
	
		// expect mind to have no thoughts
		expect(mind.thoughts.length).toBe(0)
		
		// add thought
		mind.addThought(new Thought("Cheddar", 0.6))

		// expect mind to have 1 thought
		expect(mind.thoughts.length).toBe(1)
	})

	it("should be able to remove thoughts by name", () => {

		const removeableThought = new Thought("Socks", 0.02)
		const thoughts = [
			new Thought("Cheddar", 0.6),
			new Thought("Milk", 0.2),
			new Thought("Crips", 0.12),
			new Thought("Jeans", 0.32),
			removeableThought
		]
		const mind = new Mind()

		// add thoughts
		thoughts.forEach(thought => mind.addThought(thought))
		
		// expect mind to have correct number of thoughts
		expect(mind.thoughts.length).toBe(thoughts.length)

		// remove thought by name
		mind.removeThoughtByName(removeableThought.name)
		
		// expect mind to have one less thought
		expect(mind.thoughts.length).toBe(thoughts.length - 1)
	})
})