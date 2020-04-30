import actionTypes from "./actionTypes";


export const resolveBug = id => ({
	type: actionTypes.RESOLVE_BUG,
	payload: {
		id: id
	}
});

export const removeBug = id => ({
	type: actionTypes.REMOVE_BUG,
	payload: {
		id: id
	}
});

export const addBug = description => ({
	type: actionTypes.ADD_BUG,
	payload: {
		description: description
	}
});
