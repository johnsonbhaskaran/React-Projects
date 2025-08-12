import { useEffect, useState } from "react";
import AdminPanel from "./components/AdminPanel.jsx";
import LoginForm from "./components/LoginForm.jsx";

const ConditionalRendering = () => {
  let content;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, [content]);

  function onclick() {
    console.log("clicked");
    setIsLoggedIn(!isLoggedIn);
  }

  if (isLoggedIn) {
    content = <AdminPanel onclick={onclick()} />;
  } else {
    content = <LoginForm onclick={onclick} />;
  }

  return <div>{content}</div>;
};
export default ConditionalRendering;
