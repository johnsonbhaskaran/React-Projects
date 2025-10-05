import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input
        type='text'
        ref={props.refer}
        placeholder={props.placeholder}
        name={props.name}
        // onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
};
export default FormInput;
