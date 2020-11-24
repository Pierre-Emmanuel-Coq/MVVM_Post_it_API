Vue.createApp({
	data() {
		return {
			postits: [{ message: 'Design' }, { message: 'Prototype' }, { message: 'Testing' }, { message: 'final' }],
			notes: [{ title: 'Design', message: 'Work some'}, { title: 'Design', message: 'Work some'}, { title: 'Design', message: 'Work some'}, { title: 'Prototype',
			 message: 'Assembler le prototype'}, { title: 'Prototype', message: 'Print les pièces'}]
		}
	}
}).mount('#test')