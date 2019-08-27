import React, {Component} from 'react';
import './css/App.css';
import './css/bootstrap3.min.css';
//import { StyleSheet } from 'react-native';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Box1(props){
  return (
    <input  className="box" value={props.val}  readOnly  />
  )
}

function Box2(props){
  return (
    <input  className="box2 blink"
            value={props.val}
            style={{color : props.val === 'Correct'?'green':'red'}}
            readOnly  />
  )
}


class Addition extends Component{
  state = {
    value1 : getRandom(0,10),
    value2 : getRandom(0,10),
    result : '',
    message: ''
  }
  validateResult =(event) => {
    event.preventDefault()
    if (this.state.value1 + this.state.value2 === parseInt(this.state.result)){
      console.log("Correct")
      this.setState({message: 'Correct'})
    }else{
      console.log("Wrong");
      this.setState({message: 'Wrong'})
    }

  }

  refreshPage =(event) =>{
    //window.location.reload();
    this.setState({
      value1 : getRandom(0,10),
      value2 : getRandom(0,10),
      result : '',
      message: ''
    })
  }


  render(){
 return (
 <div className="App">
   <header className="App-header">
<form  onSubmit={this.validateResult}>
   <div >
      <Box1 val={this.state.value1}/>
      <Box1 val="+"/>
      <Box1 val={this.state.value2}/>
      <Box1 val="=" />
      <input className="resbox"
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

class Multiplication extends Component{
  state = {
    value1 : getRandom(1,3),
    value2 : getRandom(2,10),
    result : '',
    message: ''
  }
  validateResult =(event) => {
    event.preventDefault()
    if (this.state.value1 * this.state.value2 === parseInt(this.state.result)){
      console.log("Correct")
      this.setState({message: 'Correct'})
    }else{
      console.log("Wrong");
      this.setState({message: 'Wrong'})
    }

  }

  refreshPage =(event) =>{
    //window.location.reload();
    this.setState({
      value1 : getRandom(1,3),
      value2 : getRandom(2,10),
      result : '',
      message: ''
    })
  }


 render(){
   return (
     <div className="App">
       <header className="App-header">
  <form  onSubmit={this.validateResult}>
      <div className="">
         <Box1 val={this.state.value1}/>
         <Box1 val="X"/>
         <Box1 val={this.state.value2}/>
         <Box1 val="=" />
         <input className="resbox"
                value={this.state.result}
                onChange={event => this.setState({result: event.target.value})}
                required
          />
          <br/>
          <Box2  val={this.state.message} />
          <br/><br/>
          <input  type="submit" value="Submit" />
     </div>
    </form>
        &nbsp;<button type="button" onClick={this.refreshPage}>Next</button>
        </header>
     </div>
      )
    }
    }


export default class App extends React.Component {
  //this.state = {value: ''};

  state = {
   showAddition: false,
   showMultiplication: false
}

  handleAddClick= (props) => {
    this.setState({showAddition: true, showMultiplication:false})
  }

  handleMulClick= (props) => {
    this.setState({showMultiplication: true, showAddition:false})
  }

  render(){
    const { showAddition,showMultiplication } = this.state
 return (
 <div className="App">
   <header className="row App-header">
   <p >
    KIDS MATHS
    </p>
    <div>
    <div  className="row ">
    <div className="col-xs-2"></div>
    <div className="col-xs-2 ">
    <button className="btn btn-lg offset-1" onClick={this.handleAddClick}> + </button>
    </div>
    <div className="col-xs-2"></div>
    <div className="col-xs-2">
    <button className="btn btn-lg  offset-1" onClick={this.handleMulClick}> X </button>
    </div>
    </div>

    {showAddition && <Addition url='/Addition'/>}
    {showMultiplication && <Multiplication url='/Multiplication'/>}
    </div>
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
