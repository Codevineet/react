import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [keyLength, setKeyLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const randomGenerator = useCallback(() => {
    let result = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (charsAllowed) {
      str += "@#$%&()}{?";
    }

    for (let i = 0; i < keyLength; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(result);
  }, [keyLength, numberAllowed, charsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    randomGenerator();
  }, [charsAllowed, numberAllowed, keyLength, setPassword]);

  return (
    <>
      <h1 ref={passwordRef}>{password}</h1>
      <button id="copy" onClick={copyPasswordToClipboard}>
        Copy
      </button>
      <br />
      <br />
      <input
        type="range"
        min={6}
        max={60}
        name="range"
        value={keyLength}
        id="range"
        onChange={(e) => {
          setKeyLength(e.target.value);
          randomGenerator();
        }}
      />
      <label htmlFor="">KeyLength : {keyLength}</label>

      <input
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="">Numbers</label>
      <input
        type="checkbox"
        defaultChecked={charsAllowed}
        id="check"
        onChange={() => {
          setCharsAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="">Characters</label>
    </>
  );
}

export default App;
