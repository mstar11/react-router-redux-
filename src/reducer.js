import {
  POSTS_DATA_FAILED,
  POSTS_DATA_REQUEST,
  POSTS_DATA_SUCCESS,
  USERSPOST_DATA_SUCCESS,
  USERSPOST_DATA_REQUEST,
  USERSPOST_DATA_FAILED,
  USERSCOMMENTS_DATA_SUCCESS,
  USERSCOMMENTS_DATA_REQUEST,
  USERSCOMMENTS_DATA_FAILED,
} from "./Constanc";
export const postsReducers = (
  state = { looding: false, errore: false, users: [] },
  action
) => {
  switch (action.type) {
    case POSTS_DATA_REQUEST:
      return { ...state, looding: true };
    case POSTS_DATA_SUCCESS:
      return { looding: false, users: action.payload };
    case POSTS_DATA_FAILED:
      return { ...state, errore: true };
    default:
      return state;
  }
};

export const usersPostsReducers = (
  state = { looding: false, errore: false, usersposts: [] },
  action
) => {
  switch (action.type) {
    case USERSPOST_DATA_REQUEST:
      return { ...state, looding: true };
    case USERSPOST_DATA_SUCCESS:
      return { looding: false, usersposts: action.payload };
    case USERSPOST_DATA_FAILED:
      return { ...state, errore: true };
    default:
      return state;
  }
};
export const usersCommentsReducers = (
        state = { looding: false, errore: false, userscomments: [] },
        action
      ) => {
        switch (action.type) {
          case USERSCOMMENTS_DATA_REQUEST:
            return { ...state, looding: true };
          case USERSCOMMENTS_DATA_SUCCESS:
            return { looding: false, userscomments: action.payload };
          case USERSCOMMENTS_DATA_FAILED:
            return { ...state, errore: true };
          default:
            return state;
        }
      };
      
