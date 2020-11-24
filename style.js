Vue.createApp({
	data() {
		return {
			postits: [{ message: 'Design' }, { message: 'Prototype' }, { message: 'Testing' }, { message: 'final' }],
			designs: [{ note: 'work some' }, { note: 'work more' }, { note: 'again work' }]
		}
	}
}).mount('#test')