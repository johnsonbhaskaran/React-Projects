import { lazy, Suspense, useState } from "react";
import { images, text } from "./data.js";
// import ImgElem from "./components/ImgElem";

const fakeDelay = async (promise) => {
  return await new Promise((resolve) => setTimeout(resolve, 4000)).then(() => promise);
};

const ImgElem = lazy(() => fakeDelay(import("./components/ImgElem.jsx")));

const Clone = () => {
  const [about, setAbout] = useState(false);

  const handleClick = () => {
    setAbout(!about);
  };

  return (
    <div>
      <h1 onClick={handleClick}>Childhood - Best days of life</h1>

      {!about ? (
        (() => {
          return images.map((image) => (
            <Suspense fallback={<div>Loading...</div>}>
              <ImgElem key={image.id} src={image.imgSrc} />
            </Suspense>
          ));
        })()
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
export default Clone;
