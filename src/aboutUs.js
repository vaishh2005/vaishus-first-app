import React, { useState } from 'react';
import { digitToWordsConverter } from 'digits-words-currency_converter';
import './aboutUs.css';

const AboutUs = () => {
  const [number, setNumber] = useState('');
  const [convertedWords, setConvertedWords] = useState('');

  const handleConvert = () => {
    if (!isNaN(number) && number.trim() !== '') {
      const result = digitToWordsConverter(number, 'Argentina');
      setConvertedWords(result);
    } else {
      setConvertedWords('Please enter a valid number.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className="text-center">About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate individuals dedicated to
        sharing creativity and thoughts with the world. Our mission is to create a
        platform where writers can express themselves through shayari, quotes, and
        daily reflections.
      </p>
      <p>
        Join us on this journey of inspiration and storytelling, and become a part of
        our vibrant community.
      </p>

      <div style={{ marginTop: '20px' }}>
        <label htmlFor="numberInput" style={{ display: 'block', marginBottom: '10px' }}>
          Enter a number (with decimals allowed):
        </label>
        <input
          type="text"
          id="numberInput"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
          style={{ padding: '8px', width: '100%', maxWidth: '300px', marginBottom: '10px' }}
        />
        <br />
        <button className="btn-primary" onClick={handleConvert}>
          Convert
        </button>
        {convertedWords && (
          <h3 style={{ marginTop: '20px' }}>{convertedWords}</h3>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
