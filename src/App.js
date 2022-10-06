import React from 'react'
import './switch.css'
   
class Counter extends React.Component {
   
    render() {
        return(
          <center>
            <div className="Switch">
                <center><b><h1><Button text = "Harry Potter"> </Button></h1></b></center>
            </div>
            </center>  
        )
    }
}
  
class Button extends React.Component{
    state = {
        textflag: false,
    }
       
    ToggleButton() {
        this.setState(
            {textflag : !this.state.textflag}
        );
    }
   
    render() {
        return(
            <div>
                <button onClick={() => this.ToggleButton()}>
                  { this.state.textflag === false ? "Off":"On" }
                </button><br></br>
                {!this.state.textflag && this.props.text}
            </div>
        )
    }
}
  
export default Counter;