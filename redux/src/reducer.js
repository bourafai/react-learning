import actionTypes from "./actionTypes";

let lastId = 0;

//return the state based on the action
export default function reducer(state = [], action) {
	switch (action.type) {
		case actionTypes.ADD_BUG:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false
				}
			];
		case actionTypes.REMOVE_BUG:
			return state.filter(bug => bug.id !== action.payload.id);
		case actionTypes.RESOLVE_BUG:
			return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
		default:
			return state;
	}

}