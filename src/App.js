import React, {Component} from 'react';
import './css/App.css';
import './css/bootstrap3.min.css';
//import { StyleSheet } from 'react-native';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const addInp = function(){
  return {
    value1 : getRandom(0,10),
    value2 : getRandom(0,10)
  }
}

  const mulInp = function(){
    return {
      value1 : getRandom(2,5),
      value2 : getRandom(2,10)
    }
  }

    const subInp = function(){
      var v1 = getRandom(1,10)
      var v2 = getRandom(0,v1)
      return {
        value1 : v1,
        value2 : v2
      }
}

const getInitial = function(func){
  var obj = func()
  obj['result'] = ''
  obj['message'] = ''
  return obj
}


const add = function(n1,n2){
  return n1+n2
}

const sub = function(n1,n2){
  return n1-n2
}

const mul = function (n1,n2) {
  return n1*n2
}

const calc = function(n1,n2, func){
  return func(n1,n2)
}

const isCorrect = function(n1,n2,result,func){
  return result === calc(n1,n2,func)
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
  state = getInitial(addInp)

  validateResult =(event) => {
    event.preventDefault()
    var msg = isCorrect(this.state.value1,this.state.value2, parseInt(this.state.result), add)?'Correct':'Wrong'
    this.setState({message: msg})
  }

  refreshPage =(event) =>{
    this.setState(getInitial(addInp))
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
  state = getInitial(mulInp)

  validateResult =(event) => {
    event.preventDefault()
    var msg = isCorrect(this.state.value1,this.state.value2, parseInt(this.state.result), mul)?'Correct':'Wrong'
    this.setState({message: msg})
  }

  refreshPage =(event) =>{
    this.setState(getInitial(mulInp))
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

class Substraction extends Component{
      state = getInitial(subInp)
      validateResult =(event) => {
        event.preventDefault()
        var msg = isCorrect(this.state.value1,this.state.value2, parseInt(this.state.result), sub)?'Correct':'Wrong'
        this.setState({message: msg})
      }

      refreshPage =(event) =>{
        this.setState(getInitial(subInp))
      }

     render(){
       return (
         <div className="App">
           <header className="App-header">
      <form  onSubmit={this.validateResult}>
          <div className="">
             <Box1 val={this.state.value1}/>
             <Box1 val="-"/>
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

class Comparison extends Component{
      state = getInitial(addInp)
      validateResult =(event) => {
        event.preventDefault()
        const v1 = this.state.value1
        const v2 = this.state.value2
        const res = (this.state.result === '')? '>' : this.state.result
        if ((v1 === v2 &&  res === "=") || (v1 < v2 && res ==="<") || (v1>v2 && res ===">")){
          this.setState({message: 'Correct'})
        }else{
          this.setState({message: 'Wrong'})
        }
      }

      refreshPage =(event) =>{
        this.setState(getInitial(addInp))
      }

     render(){
       return (
         <div className="App">
           <header className="App-header">
      <form  onSubmit={this.validateResult}>
          <div className="">
             <Box1 val={this.state.value1}/>
              <select className="resbox"
                      value={this.state.result}
                      onChange={event => this.setState({result: event.target.value})}>
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value="=">=</option>
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Box1 val={this.state.value2}/>
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
  state = {
   showAddition: false,
   showMultiplication: false,
   showSubstraction: false,
   showComparison: false
}

  handleAddClick= (props) => {
    this.setState({showAddition: true, showComparison: false, showMultiplication:false, showSubstraction: false})
  }

  handleMulClick= (props) => {
    this.setState({showMultiplication: true,showComparison: false, showAddition:false,showSubstraction: false})
  }

  handleSubClick= (props) => {
    this.setState({showComparison: false,showSubstraction: true, showMultiplication: false, showAddition:false})
  }

  handleCompClick= (props) => {
    this.setState({showComparison: true,showSubstraction: false, showMultiplication: false, showAddition:false})
  }

  render(){
    const { showAddition,showMultiplication, showSubstraction, showComparison } = this.state
 return (
 <div className="App">
   <header className="row App-header">
   <p >
    KIDS MATHS
    </p>
    <div>
    <div  className="row btn-group">
      <div className="col-xs-1"></div>
      <div className="col-xs-1 ">
      <button className="btn btn-lg offset-1" onClick={this.handleAddClick}> + </button>
      </div>
      <div className="col-xs-1"></div>
      <div className="col-xs-1">
        <button className="btn btn-lg  offset-1" onClick={this.handleMulClick}> X </button>
      </div>
      <div className="col-xs-1"></div>
      <div className="col-xs-1">
        <button className="btn btn-lg  offset-1" onClick={this.handleSubClick}> - </button>
      </div>
      <div className="col-xs-1"></div>
      <div className="col-xs-1">
        <button className="btn btn-lg offset-1" onClick={this.handleCompClick}>&gt;=&lt;</button>
      </div>
    </div>
    </div>

    {showAddition && <Addition />}
    {showMultiplication && <Multiplication />}
    {showSubstraction && <Substraction />}
    {showComparison && <Comparison />}
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



<input className="resbox"
       value={this.state.result}
       onChange={event => this.setState({result: event.target.value})}
       required
 />


*/
