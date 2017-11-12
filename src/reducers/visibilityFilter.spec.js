import visibilityFilter from '.visibilityFilter';

describe('visibilityFilter reducer', () => {
	it('should have an initial state', () => {
		expect(visibilityFilter(undefined, {})).toEqual([]);
	});
});
