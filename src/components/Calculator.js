import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
    };
  }

  render() {
    return (
      <div>
        <h1 className='title'>Calculator</h1>
        <div>
          <div className='result'>
            <div className='resultDisplay'>{this.state.result}</div>
            <div className='gridBox'>
              <button className='gridButton clear'>AC</button>
              <button className='gridButton signChange'>+/-</button>
              <button className='gridButton percent'>%</button>
              <button className='gridButton divide'>/</button>
              <button className='gridButton number'>7</button>
              <button className='gridButton number'>8</button>
              <button className='gridButton number'>9</button>
              <button className='gridButton multiply'>x</button>
              <button className='gridButton number'>4</button>
              <button className='gridButton number'>5</button>
              <button className='gridButton number'>6</button>
              <button className='gridButton substract'>-</button>
              <button className='gridButton number'>1</button>
              <button className='gridButton number'>2</button>
              <button className='gridButton number'>3</button>
              <button className='gridButton add'>+</button>
              <button className='gridButton number zero'>0</button>
              <button className='gridButton dot'>.</button>
              <button className='gridButton equals'>=</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;