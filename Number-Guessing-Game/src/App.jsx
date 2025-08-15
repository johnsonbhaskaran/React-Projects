import { useState, useEffect } from "react";

/**
 * Your task: Build a Number Guessing Game
 *
 * Game Description:
 * Create a simple React game where the user guesses a randomly generated number between 1 and 10,
 * The user has 3 attempts to guess the correct number,
 * The user receives real-time feedback on whether the guess is too high, too low, or correct,
 * The game ends and resets automatically when the user wins - with a correct guess -, or loses after 3 failed attempts.
 *
 * Features:
 * 1. The game generates a random number between 1 and 10 when it starts:
 *      => setup the useEffect() to generate a random number
 * 2. handleInput() manages the user input and checks if the guess is correct, too high, or too low:
 *      => setup the handleInput() to check if the user input matches the randomly generated number
 *      => setup the handleInput() to check if the input is too high or too low
 * 3. Display the number of attempts:
 *      => Attempts: xx left
 * 4.  Display a message to the user when they win or lose:
 *      => Win: Correct! 🏆, You guessed right! The correct number is xx
 *      => Lose: Game Over! 😢, The correct number was xx
 * 4. The game resets automatically with handleReset(), when the user wins or loses (after 3 failed attempts):
 **/

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "2rem",
  width: "100vw",
};

function NumberGuessingGame() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempts, setAttempts] = useState(3);

  function generateRandom() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleInput = () => {
    const num = parseInt(input);

    console.log(attempts);

    if (isNaN(num) || randomNumber == null) return;
    // [Optional] - Check if the input is a number between 1 and 10
    if (num > 10 || num <= 0) {
      setMessage("Please enter a number between 1 and 10");
      // Check if the input is correct
    } else {
      if (num === randomNumber)
        setMessage(`Correct! 🏆, You guessed right! The correct number is ${randomNumber}`);
      if (num > randomNumber) setMessage(`Too high, Try again. You have ${attempts} attempts left`);
      if (num < randomNumber) setMessage(`Too low, Try again. You have ${attempts} attempts left`);
    }
    // Check for the number of attempts left - Game Over if attempts are 0
    if (attempts === 0) {
      setMessage(`Game Over! 😢, The correct number was ${randomNumber}`);
      handleReset();
    }

    // Check for the number of attempts left - Decrease the attempts by 1 on every try
    if (attempts >= 1) setAttempts(() => attempts - 1);
  };

  const handleReset = () => {
    // reset the game by generating a new random number and resetting the attempts, the message and the input
    setRandomNumber(generateRandom());
    setAttempts(3);
    setMessage("");
    setInput("");
  };

  useEffect(() => {
    // Generate a random number when the component mounts and the game starts
    setRandomNumber(generateRandom());
  }, []);

  return (
    <div style={styles}>
      <h1>🔢 Number Guessing Game</h1>
      <p>
        Input a number between 1 and 10 (
        <span style={{ fontStyle: "italic" }}>Attemps: {attempts} left</span>)
      </p>
      {/* write your code here */}
      <div className='mt-2'>
        <input
          className='border'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='number'
        />
        <button className='ml-2 px-2 border' onClick={handleInput}>
          guess
        </button>
      </div>
      <p>{message}</p>
      <button className='mt-2 px-2 border' onClick={handleReset}>
        reset
      </button>
      <p>random: {randomNumber}</p>
      <p>attempts: {attempts}</p>
    </div>
  );
}

function App() {
  return <NumberGuessingGame />;
}
/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `App` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <App />;
}
/* Ignore and do not change the code above */

// Export the main App component
export default App;
