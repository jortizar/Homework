import React from 'react'
import './Square.css'

export default class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Num1: '',
                        Num2: ''}
    
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
      }
    
      handleChange1(event) {
        this.setState({Num1: event.target.Num1});
        console.log(this.state.Num1)
      }
      handleChange2(event) {
        this.setState({Num2: event.target.Num2});
        console.log(this.state.Num2)
      }
    
      render() {
        return (
          <div>  
          <form>
            <label>
              Number1
              <input type="text" value={this.state.Num1} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <label>
              Number2
              <input type="text" value={this.state.Num2} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <div className='square' width='10em' height='10em'></div>
          
          </div>
        );
      }
    }

