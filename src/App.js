import './App.css';
import Button from './components/Button.js';
import Input from './components/Input.js'
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  function onChangeInput(value){
    setInput(input + value);
  }

  function isValidInput(){
    for(let i = 0; i < input.length; i++){
      if(input[i] !== '+' && input[i] !== '-' && input[i] !== '/' && input[i] !== '*' ){
        return true;
      }
    }
    return false;
  }

  function calculateResult(){
    if(input.length === 1){
      alert("Ingresaste un solo numero");
    }else{
      if(input && isValidInput){
        setInput(evaluate(input));
      }else{
        alert("Ingresa valores para calcular");
      }
    }
  }

  return (
    <div className="App">
      <div className='calculator-panel'>
        <div className='row-display-input'>
          <Input input={input}/>
          <ClearButton onClickAC={() => setInput('')}>AC</ClearButton>
        </div>

        <div className='row-display-button'>
          <Button onClickButton={onChangeInput}>7</Button>
          <Button onClickButton={onChangeInput}>8</Button>
          <Button onClickButton={onChangeInput}>9</Button>
          <Button onClickButton={onChangeInput}>*</Button>
        </div>

        <div className='row-display-button'>
          <Button onClickButton={onChangeInput}>4</Button>
          <Button onClickButton={onChangeInput}>5</Button>
          <Button onClickButton={onChangeInput}>6</Button>
          <Button onClickButton={onChangeInput}>+</Button>
        </div>

        <div className='row-display-button'>
          <Button onClickButton={onChangeInput}>1</Button>
          <Button onClickButton={onChangeInput}>2</Button>
          <Button onClickButton={onChangeInput}>3</Button>
          <Button onClickButton={onChangeInput}>-</Button>
        </div>
        
        <div className='row-display-button'>
          <Button onClickButton={onChangeInput}>0</Button>
          <Button onClickButton={onChangeInput}>.</Button>
          <Button onClickButton={calculateResult}>=</Button>
          <Button onClickButton={onChangeInput}>/</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
