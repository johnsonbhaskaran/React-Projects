import { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "../postReducer";
import { ACTION_TYPES } from "../actionTypes";

const PostUseReducer = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.cm/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.log(err);
      });
  };

  return (
    <div>
      <button className='border rounded w-48 h-12 cursor-pointer' onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span className='text-red'>{state.error && "Something went wrong!"}</span>
    </div>
  );
};
export default PostUseReducer;
