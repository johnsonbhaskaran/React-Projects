import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserFunction = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "India" ? true : false,
    }),
    [age, country]
  );

  // useEffect(() => {
  //   console.count("User type has changed!");
  // }, [userType.underAge, userType.citizen]);

  useEffect(() => {
    console.count("User type has changed!");
  }, [userType]);

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} type='text' />
      <input onChange={(e) => setAge(e.target.value)} value={age} type='text' />
      <select onChange={(e) => setCountry(e.target.value)} name='citizen' id='citizen'>
        <option value='Select' disabled>
          select
        </option>
        <option value='UK'>UK</option>
        <option value='USA'>USA</option>
        <option value='India'>India</option>
      </select>
    </div>
  );
};
export default UserFunction;
