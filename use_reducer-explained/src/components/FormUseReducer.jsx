import { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE } from "../formReducer";
import { ACTION_TYPES } from "../actionTypes";

const FormUseReducer = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPES.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(", ");
    tags.forEach((tag) => [dispatch({ type: ACTION_TYPES.ADD_TAG, payload: tag })]);
  };

  console.log(state);

  return (
    <div>
      <form>
        <input name='title' onChange={handleChange} type='text' placeholder='Title' />
        <input name='desc' onChange={handleChange} type='text' placeholder='Desc' />
        <input name='price' onChange={handleChange} type='text' placeholder='Price' />
        <p>Category:</p>
        <select name='category' onChange={handleChange} id='category'>
          <option value='sneakers'>Sneakers</option>
          <option value='shirt'>Shirt</option>
          <option value='bag'>Bag</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          name='tags'
          id='tags'
          placeholder='Seperate tags with commas...'
        ></textarea>
        <button onClick={handleTags} type='button'>
          Add Tags
        </button>
        <div className='m-4'>
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: ACTION_TYPES.REMOVE_TAG, payload: tag })}
              className='m-1 p-2 border rounded'
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <button
            type='button'
            className='p-3 border rounded cursor-pointer'
            onClick={() => dispatch({ type: ACTION_TYPES.DECREASE })}
          >
            -
          </button>
          <p>Quantity ({state.quantity})</p>
          <button
            type='button'
            className='p-3 border rounded cursor-pointer'
            onClick={() => dispatch({ type: ACTION_TYPES.INCREASE })}
          >
            +
          </button>
        </div>
        <p>{state.title}</p>
      </form>
    </div>
  );
};
export default FormUseReducer;
