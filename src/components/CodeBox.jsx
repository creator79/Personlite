import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';

const colors = ['pink', 'blue', 'green', 'red'];

const CodeBox = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const copyCodeToClipboard = () => {
    clipboardCopy(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset copy status after 1.5 seconds
  };

  useEffect(() => {
    // Simulate typing animation
    const codeTypingInterval = setInterval(() => {
      if (codeIndex < code.length) {
        setTypedCode(code.substring(0, codeIndex + 1));
        setCodeIndex(codeIndex + 1);
      } else {
        // Reset codeIndex to restart the animation
        setCodeIndex(0);
        // Change the text color in a loop
        setColorIndex((colorIndex + 2) % colors.length);
      }
    }, 150); // Adjust the typing speed by changing the interval

    return () => {
      clearInterval(codeTypingInterval);
    };
  }, [code, codeIndex, colorIndex]);

  const textColor = colors[colorIndex];

  return (
    <div className="p-5 rounded-md shadow-md relative" style={{ backgroundColor: '#333333' }}>
      <pre className="overflow-x-auto">
        <code className="text-sm font-mono whitespace-pre" style={{ color: textColor }}>
          {typedCode}
        </code>
      </pre>

      <button
        className={`absolute top-2 right-2 py-2 px-4 text-xs rounded my-2 mx-2 ${
          isCopied ? 'bg-green-600' : 'bg-pink-600'
        } text-white`}
        onClick={copyCodeToClipboard}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBox;
