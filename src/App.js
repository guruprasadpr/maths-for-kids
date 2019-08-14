import React, {Component} from 'react';
import './App.css';
//import { StyleSheet } from 'react-native';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Box1(props){
  return (
    <input  class="box" value={props.val}  readOnly  />
  )
}

function Box2(props){
  return (
    <input  class="box2 blink"
            value={props.val}
            style={{color : props.val === 'Correct'?'green':'red'}}
            readOnly  />
  )
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

export default class App extends React.Component {
  //this.state = {value: ''};
  state = {
    value1 : getRandom(1,7),
    value2 : getRandom(1,5),
    result : '',
    message: ''
  }
  validateResult =(event) => {
    event.preventDefault()
    if (this.state.value1 + this.state.value2 === parseInt(this.state.result)){
      console.log("Correct")
      this.setState({message: 'Correct'})
      //wait(3000)
      //window.location.reload();
    }else{
      console.log("Wrong");
      this.setState({message: 'Wrong'})
    }

  }

  refreshPage =(event) =>{
    //window.location.reload();
    this.setState({
      value1 : getRandom(1,7),
      value2 : getRandom(1,5),
      result : '',
      message: ''
    })
  }
   render(){
  return (
  <div className="App">
    <header className="App-header">
    <p>
     VARDHAN  TANVI
     </p>
<form  onSubmit={this.validateResult}>
    <div >
       <Box1 val={this.state.value1}/>
       <Box1 val="+"/>
       <Box1 val={this.state.value2}/>
       <Box1 val="=" />
       <input class="resbox"
              value={this.state.result}
              onChange={event => this.setState({result: event.target.value})}
              required
        />
        <br/>
        <Box2  val={this.state.message} />
       <br/><br/>
       <input type="submit" value="Submit" />
  </div>
</form>
     &nbsp;<button type="button" onClick={this.refreshPage}>Next</button>
     </header>
  </div>
   )
 }
}

//export default App;

/*
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
*/
