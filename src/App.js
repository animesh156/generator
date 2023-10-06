import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp]= useState("");
  const [word, setWord]= useState("");
  const [size, setSize]= useState(200);
  const [bgColor, setBgColor]= useState('ffffff');
  const [qrcode, setQrCode]= useState("");

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }


  return (

    <>
    <div className='content'>

   
    <h1>QR Code Generator</h1>

    <div className='input-box'>
      <div className='gen'> 
      <input type='text' onChange={(e) => {setTemp(e.target.value)}}
      placeholder='Enter text to encode' />

      <button className='button' onClick={handleClick}>
Generate
      </button>
      </div>

      <div className='extra'>
        <span>Background Color:</span>
        <input type='color' onChange={(e) => {
          setBgColor(e.target.value.substring(1))
        }} />
      
      </div>
    </div>

    <div className='output-box'>
      <img src={qrcode} alt=''></img>
      <a href={qrcode} download='QRCode'>
        <button type='button'>Download</button>
      </a>
    </div>
    </div>
    
    </>
  ) 
};

export default App;
