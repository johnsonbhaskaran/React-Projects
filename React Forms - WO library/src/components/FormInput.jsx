import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        type='text'
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormInput;
