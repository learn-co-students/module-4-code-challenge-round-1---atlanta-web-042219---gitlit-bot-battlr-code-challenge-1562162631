import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      botList : [],
      botArmy :[]
    }
  }

  componentDidMount= ()=>{
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(res => 
      this.setState(
        {
          botList: res
        }
      ))
  }

  // addNewBot=()=>{


  // }

  addBot=(bot)=>{
    let uniqueBot = this.state.botArmy.filter( b=> b.id !== bot.id)
    uniqueBot.push(bot)
    this.setState({
      botArmy:uniqueBot
    })
  }

  removeBot=(bot)=>{
    let newBotArmy = this.state.botArmy.filter(b => b.id !== bot.id)
    this.setState({
      botArmy: newBotArmy
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage 
        botList= {this.state.botList}
        botArmy= {this.state.botArmy}
        addBot ={this.addBot} 
        removeBot ={this.removeBot}/>
      </div>
    );
  }
}

export default App;