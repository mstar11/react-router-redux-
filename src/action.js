import axios from "axios";
import {
  POSTS_DATA_SUCCESS,
  POSTS_DATA_REQUEST,
  POSTS_DATA_FAILED,
  USERSPOST_DATA_SUCCESS,
  USERSPOST_DATA_REQUEST,
  USERSPOST_DATA_FAILED,
  USERSCOMMENTS_DATA_SUCCESS,
  USERSCOMMENTS_DATA_REQUEST,
  USERSCOMMENTS_DATA_FAILED,
} from "./Constanc";
export const getUserAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: POSTS_DATA_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
//     console.log(data);
    dispatch({ type: POSTS_DATA_SUCCESS, payload: data });
  } catch (e) {
    console.log("something wrong");
    dispatch({ type: POSTS_DATA_FAILED });
  }
};
export const getUserPostsAction = () => async (dispatch,getState) => {
        try{
                dispatch({ type:USERSPOST_DATA_REQUEST})
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
                dispatch({ type:USERSPOST_DATA_SUCCESS,payload:data})
                // console.log(data)

        }catch(e){
                console.log("somthing Wrong")
                dispatch({ type:USERSPOST_DATA_FAILED})

        }
};
export const getUsersCommentAaction = (postId) => async (dispatch,getState) => {
        try{
                console.log(postId)
                dispatch({ type:USERSCOMMENTS_DATA_REQUEST})
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                dispatch({ type:USERSCOMMENTS_DATA_SUCCESS,payload:data})
                console.log(data)

        }catch(e){
                console.log("somthing Wrong")
                dispatch({ type:USERSCOMMENTS_DATA_FAILED})

        }
};
