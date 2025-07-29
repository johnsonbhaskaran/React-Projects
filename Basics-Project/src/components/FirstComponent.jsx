const FirstComponent = ({ dataPasssing, functionPassing }) => {
  return (
    <>
      <div>{dataPasssing}</div>
      <button
        onClick={() => {
          functionPassing(10);
        }}
      >
        Set 10
      </button>
    </>
  );
};

export default FirstComponent;
