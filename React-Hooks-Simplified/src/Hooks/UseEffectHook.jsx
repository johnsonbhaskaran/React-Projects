import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div className='mt-8 space-x-5'>
        <button
          className='px-5 py-3 border rounded-md cursor-pointer'
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          className='px-5 py-3 border rounded-md cursor-pointer'
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          className='px-5 py-3 border rounded-md cursor-pointer'
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>

      <h1 className='text-4xl my-8'>{resourceType}</h1>

      {items.map((i) => (
        <pre>{JSON.stringify(i)}</pre>
      ))}
    </>
  );
};
export default UseEffectHook;
