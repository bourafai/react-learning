import * as actions from "./actions";
import store from "./store";

store.subscribe(() => console.log('store state : ', store.getState()));
store.dispatch(actions.addBug("bug1"));
store.dispatch(actions.addBug("bug2"));
store.dispatch(actions.resolveBug(1));
store.dispatch(actions.resolveBug(2));
store.dispatch(actions.removeBug(1));
