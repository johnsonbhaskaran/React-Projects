import { useState } from "react";
import "./App.css";
// import "styled-components";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);

  function handleSubmit() {
    if (name && message) {
      setSubmittedMessages([...submittedMessages, { name: name, message: message }]);
      setName("");
      setMessage("");
    }
  }

  return (
    <>
      <div className='mx-auto py-6 max-w-md h-screen container'>
        <h3>Contact Customer Support*</h3>
        <div className='flex flex-col space-y-4 mt-6'>
          <input
            className='px-3 py-2 border border-emerald-500 outline-emerald-500 select-black'
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='Your Name'
          />
          <textarea
            className='px-3 py-2 border border-emerald-500 outline-emerald-500'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder='Your Message'
          />
          <button className='bg-emerald-600 p-2 text-white cursor-pointer' onClick={handleSubmit}>
            submit
          </button>
        </div>
        <p className='my-3'>*Make sure you've tried turning it off and on again first.</p>

        {submittedMessages.length > 0 && (
          <div>
            <h4>Received Messages</h4>
            <table className='border border-purple-600 w-full table-fixed'>
              <thead className='bg-lime-400'>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {submittedMessages.map((subMsg, index) => (
                  <tr key={index}>
                    <td>{subMsg.name}</td>
                    <td>{subMsg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
