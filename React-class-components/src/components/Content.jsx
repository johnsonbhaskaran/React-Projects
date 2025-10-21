import styled from "styled-components";

const Content = () => {
  let Button = styled.button`
    background-color: darkblue;
    color: white;
    width: 100px;
    height: 50px;
  `;
  return (
    <main>
      <h1>Main content</h1>
      <Button>Add</Button>
    </main>
  );
};

export default Content;
