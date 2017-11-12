import todos from './todos';

describe('todos reducer', () => {
	it('should handle initial state', () => {
		expect(todos(undefined, {})).toEqual([]);
	});

	it('should handle ADD_TODO', () => {
		expect(todos([], {
			type: 'ADD_TODO',
			text: 'run tests',
			id: 0
		})).toEqual([{
			text: 'run tests',
			completed: false,
			id: 0
		}]);

		expect(todos([{
			text: 'Run the tests',
			completed: false,
			id: 0
		}], {
			type: 'ADD_TODO',
			text: 'Use Redux',
			id: 1
		})).toEqual([
			{
				text: 'Run the tests',
			  	completed: false,
			  	id: 0
			}, {
			  	text: 'Use Redux',
			  	completed: false,
			  	id: 1
			}
		]);

		expect(
	      todos([{
	          	text: 'Run the tests',
	          	completed: false,
	          	id: 0
	        },
			{
	          	text: 'Use Redux',
	          	completed: false,
	          	id: 1
			}],
		  	{
	        	type: 'ADD_TODO',
	        	text: 'Fix the tests',
	        	id: 2
	      	})).toEqual([
	      		{
	        	text: 'Run the tests',
	        	completed: false,
	        	id: 0
	      	},
			{
	        	text: 'Use Redux',
	        	completed: false,
	        	id: 1
	      },
		  {
	        	text: 'Fix the tests',
	        	completed: false,
	        	id: 2
	      }]);
	});
});
