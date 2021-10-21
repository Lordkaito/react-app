import React, { useState } from 'react';
// import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleClick = (button) => {
    if (button === '=') {
      // eslint-disable-next-line no-use-before-define
      setTotal(operate(total, next, operation));
      setNext(0);
      setOperation(null);
    } else if (button === 'AC') {
      setTotal(0);
      setNext(0);
      setOperation(null);
    } else if (button === '+/-') {
      setNext(next * -1);
    } else if (button === '+' || button === '-' || button === '*' || button === '/') {
      // eslint-disable-next-line no-use-before-define
      setTotal(calculate(total, next, operation));
      setNext(0);
      setOperation(button);
    } else {
      setNext(next * 10 + button);
    }
  };

  const calculate = (total, next, operation) => {
    if (operation === null) {
      return next;
    }
    // eslint-disable-next-line no-use-before-define
    return operate(total, next, operation);
  };

  const operate = (total, next, operation) => {
    if (operation === null) {
      return next;
    }
    if (operation === '+') {
      return total + next;
    }
    if (operation === '-') {
      return total - next;
    }
    if (operation === '*') {
      return total * next;
    }
    if (operation === '/') {
      return total / next;
    }
    return next;
  };

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>
      <div className="result">
        <div className="resultDisplay">
          <h2>{total}</h2>
          <h2>{next}</h2>
          <div className="gridBox">
            <button className="gridButton clear" onClick={() => handleClick('AC')}>AC</button>
            <button className="gridButton signChange" onClick={() => handleClick('+/-')}>+/-</button>
            <button className="gridButton percent" onClick={() => handleClick('%')}>%</button>
            <button className="gridButton divide" onClick={() => handleClick('/')}>/</button>
            <button className="gridButton number" onClick={() => handleClick(7)}>7</button>
            <button className="gridButton number" onClick={() => handleClick(8)}>8</button>
            <button className="gridButton number" onClick={() => handleClick(9)}>9</button>
            <button className="gridButton multiply" onClick={() => handleClick('*')}>*</button>
            <button className="gridButton number" onClick={() => handleClick(4)}>4</button>
            <button className="gridButton number" onClick={() => handleClick(5)}>5</button>
            <button className="gridButton number" onClick={() => handleClick(6)}>6</button>
            <button className="gridButton substract" onClick={() => handleClick('-')}>-</button>
            <button className="gridButton number" onClick={() => handleClick(1)}>1</button>
            <button className="gridButton number" onClick={() => handleClick(2)}>2</button>
            <button className="gridButton number" onClick={() => handleClick(3)}>3</button>
            <button className="gridButton add" onClick={() => handleClick('+')}>+</button>
            <button className="gridButton number zero" onClick={() => handleClick('0')}>0</button>
            <button className="gridButton dot" onClick={() => handleClick('.')}>.</button>
            <button className="gridButton equals" onClick={() => handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;