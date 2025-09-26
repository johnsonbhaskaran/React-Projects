import { lazy, Suspense, useState } from "react";
import "./App.css";
// import ImgElem from "./components/ImgElem";
import { images, text } from "./data.js";

const fakeDelay = async (promise) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
};

const ImgElem = lazy(() => fakeDelay(import("./components/ImgElem")));

function App() {
  const [about, setAbout] = useState(false);
  const handleClick = () => {
    setAbout(!about);
  };
  console.log(about);

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 onClick={handleClick} className='pt-4 text-3xl cursor-pointer select-none'>
          Childhood - The best days of life
        </h1>
        {!about ? (
          (() => {
            return images.map((image) => (
              <Suspense
                fallback={
                  <div className='flex justify-center items-center h-full text-red-500 text-6xl'>
                    Loading...
                  </div>
                }
              >
                <ImgElem key={image.id} src={image.imgSrc} />
              </Suspense>
            ));
          })()
        ) : (
          <p className='my-24 max-w-4xl text-md'>{text}</p>
        )}
      </div>
    </>
  );
}

export default App;
