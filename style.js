Vue.createApp({
	data() {
		return {
			items: [{ message: 'Foo' }, { message: 'Bar' }]
		}
	}
}).mount('#array-rendering1')

Vue.createApp({
	data() {
		return {
			postits: [{ message: 'Design' }, { message: 'Prototype' }, { message: 'Testing' }, { message: 'final' }]
		}
	}
}).mount('#test')