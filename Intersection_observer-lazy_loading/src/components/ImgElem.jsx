import { useEffect, useRef } from "react";

const ImgElem = ({ src }) => {
  console.log(src);

  const ref = useRef();

  console.log(ref.current);

  useEffect(() => {
    let observer = new IntersectionObserver();

    if (ref?.current) observer.observe(ref.current);

    return () => {
      // if (ref?.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className='m-4'>
      {/* <img src={src} /> */}
      <img
        ref={ref}
        style={{ width: "1000px", height: "1000px", backgroundColor: "rebeccapurple" }}
      />
    </div>
  );
};
export default ImgElem;
