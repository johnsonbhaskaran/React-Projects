import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import MovieDetail from "./components/MovieDetail.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className='flex flex-col justify-between bg-gray-900 h-screen'>
        <Header></Header>
        <div className='mx-10 grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
