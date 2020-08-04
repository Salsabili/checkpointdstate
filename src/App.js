import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state =  {
    fullname : 'Salsa' , bio : "jrijri" , 
    imgSrc: <img src="https://images.hdqwalls.com/wallpapers/thumb/assassins-creed-valhalla-breathing-4k-e9.jpg" alt=""/>
    , profession:"data scientist",show:false }
  render(){
    
  return (
    <div className="App">
      <button onClick = {()=>{
      this.setState({show:!this.state.show})
      }}> click me </button>
     {this.state.show? <div> <h2>{
       this.state.bio}
       <br/></h2>
       <h2>{
       this.state.fullname}
       <br/></h2>
       <h2>{
       this.state.imgSrc}
       <br/></h2>
       <h2>{
       this.state.profession}
       <br/></h2>
       </div>:null}
    </div>
  );
}
}

export default App;
