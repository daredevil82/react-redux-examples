let todoId = 0;

const addTodo = text => ({
	type: 'ADD_TODO',
	id: todoId++,
	text
});

const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

export {
	addTodo,
	setVisibilityFilter,
	toggleTodo
};
