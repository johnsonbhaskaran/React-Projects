import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { phone } = useContext(AppContext);

  return (
    <>
      <h2>Footer</h2>
      <h3>Phone: {phone}</h3>
    </>
  );
}

export default Footer;
