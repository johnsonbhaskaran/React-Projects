import { useState } from "react";

const PostUseState = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [post, setPost] = useState([]);

  const handleFetch = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <button className='border rounded w-48 h-12 cursor-pointer' onClick={handleFetch}>
        {loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{post?.title}</p>
      <span>{error && "Something went wrong!"}</span>
    </div>
  );
};
export default PostUseState;
