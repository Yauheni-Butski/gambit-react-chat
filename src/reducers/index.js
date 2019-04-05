import { combineReducers } from "redux";
import messagesReducer from "./messages";
import usersReducer from "./users";

const chatReducers = combineReducers({
    messagesState: messagesReducer,
    usersState: usersReducer
});

export default chatReducers;