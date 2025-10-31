import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, errors } = useForm();

  const sleep = (ms) => {
    return new Promise((reslove) => setTimeout(reslove, ms));
  };

  const onSubmit = (data) => {
    console.log(data);

    alert(
      `Here are your details: \nName: ${data.name} \nEmail: ${data.email} \nUsername: ${data.username} \nSource: ${data.info}`
    );
  };

  const validateUserName = async (value) => {
    await sleep(3000);

    if (value === "John") return true;

    return false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 aria-level='1'>Sign Up</h1>

      <label htmlFor='First name'>First name</label>
      {/* Register all inputs with ref */}
      <input
        name='name'
        aria-invalid={errors.name ? "true" : "false"}
        placeholder='John'
        ref={register({ required: true, minLength: 5 })}
      />

      {/* Apply error only on required field */}
      {errors.name && errors.name.type === "required" && (
        <p role='alert'>First name is required!</p>
      )}

      {/* Apply error only on minLength field */}
      {errors.name && errors.name.type === "minLength" && (
        <p role='alert'>This requires min length of 5!</p>
      )}

      <label htmlFor='Last name'>Last Name</label>
      <input
        name='name'
        placeholder='Doe'
        aria-invalid={errors.name ? "true" : "false"}
        ref={register({ required: true, minLength: 5, max: 15 })}
      />

      {/* Apply error only on minLength field */}
      {errors.name && errors.name.type === "minLength" && (
        <p role='alert'>This requires min length of 5!</p>
      )}

      <label> Email</label>
      <input
        type='email'
        name='email'
        aria-invalid={errors.email ? "true" : "false"}
        placeholder='john@doe.com'
        ref={register({ required: true })}
      />

      <label> Username</label>

      {/* validate is used to add custom validation */}
      <input
        type='text'
        name='username'
        aria-invalid={errors.username ? "true" : "false"}
        placeholder='Only John is accepted'
        ref={register({
          required: true,
          validate: validateUserName,
        })}
      />
      <label>How you got to know about us?</label>

      {/* Register select as well */}

      <select
        name='info'
        id='info'
        aria-invalid={errors.info ? "true" : "false"}
        ref={register({ required: true })}
      >
        <option value=''>Select source...</option>
        <option value='Twitter'>Twitter</option>
        <option value='Facebook'>Facebook</option>
        <option value='Other'>Other</option>
      </select>

      <input type='submit' />
    </form>
  );
}

export default App;
