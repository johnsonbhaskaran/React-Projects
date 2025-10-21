import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const user = "Judah";

  return (
    <>
      <Header user={user} />
      <Content />
      <Footer user={user} />
    </>
  );
}

export default App;
