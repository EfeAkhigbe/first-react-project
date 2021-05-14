import { POSTS, NEW_POST } from "./types";
import axios from "axios";

export const getPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      const { data } = res;

      if (!data.error) {
        dispatch({
          type: POSTS,
          payload: data,
        });
      } else {
        console.log(data);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const newPost = (data) => (dispatch) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", { ...data })
    .then((res) => {
      const { data } = res;
      console.log(res);
      if (!data.error) {
        dispatch({
          type: NEW_POST,
          payload: data,
        });
      } else console.log(data);
    })
    .catch((err) => console.log(err.response.data));
};
