const App = () => {
  let x = 0;
  const btnClickHandler = () => {
    x++;
    console.log("Button Clicked: ", x);
  };

  return (
    <div>
      <h1>{x}</h1>
      <button
        onClick={() => {
          btnClickHandler();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
