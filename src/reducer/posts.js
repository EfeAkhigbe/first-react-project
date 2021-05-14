import { POSTS, NEW_POST } from "../action/types";

const initialState = {
  posts: null,
  newPost: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case NEW_POST:
      return {
        ...state,
        newPost: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
