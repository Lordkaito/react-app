import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const data = {
      total: '0',
      next: '0',
      operation: null,
    };
    this.state = data;
  }

  onClick = (button, state) => {
    const result = calculate(state, button);
    this.setState({
      ...result,
    });
  }

  render() {
    return (
      <div>
        <h1 className='title'>Calculator</h1>
        <div>
          <div className='result'>
            <div className='resultDisplay'>{this.state.next}</div>
            <div className='gridBox'>
              <button name="AC" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton clear'>AC</button>
              <button name="+/-" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton signChange'>+/-</button>
              <button name="%" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton percent'>%</button>
              <button name="÷" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton divide'>/</button>
              <button name="7" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>7</button>
              <button name="8" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>8</button>
              <button name="9" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>9</button>
              <button name="x" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton multiply'>x</button>
              <button name="4" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>4</button>
              <button name="5" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>5</button>
              <button name="6" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>6</button>
              <button name="-" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton substract'>-</button>
              <button name="1" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>1</button>
              <button name="2" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>2</button>
              <button name="3" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number'>3</button>
              <button name="+" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton add'>+</button>
              <button name="0" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton number zero'>0</button>
              <button name="." onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton dot'>.</button>
              <button name="=" onClick={(e) => this.onClick(e.target.name, this.state)} className='gridButton equals'>=</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;