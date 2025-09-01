import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <h1 className='has-text-primary title'>Hello World</h1>
          <p className='subtitle'>
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h2 className='subtitle'>Columns</h2>
          <LoginForm />
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='skeleton-block'></div>
          <hr className='divider'></hr>
          <div className='skeleton-lines'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='container'>
            <div className='buttons'>
              <button className='button is-skeleton'>Button</button>
              <button className='button is-link is-skeleton'>Link</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
