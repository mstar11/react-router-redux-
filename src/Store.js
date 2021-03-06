import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {postsReducers,usersPostsReducers,usersCommentsReducers} from "./reducer";

const reducers =combineReducers({
        

        users :postsReducers,
        usersposts:usersPostsReducers,
        userscomments:usersCommentsReducers,
})
const initialState ={}
const middleware=[thunk]
const store=createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
)
export default store