import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      armyBots: []
    }
  }
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }
  enlistBot = (bot) => {
    if(!this.state.armyBots.includes(bot)) {
      return this.setState( state => {
        state.armyBots.push(bot)
        return state 
      })
    }
  }
  deleteBot = (bot) => {
    let newBots = [...this.state.armyBots]
    let index = newBots.indexOf(bot)
    if(index > -1 ) { newBots.splice(index, 1) }
    this.setState({ armyBots: newBots })
  } 
  render() {
    return (
      <div>
        <YourBotArmy deleteBot={this.deleteBot} armyBots={this.state.armyBots} />
        <BotCollection enlistBot={this.enlistBot} bots={this.state.bots} />
      </div>
    );
  }
}

export default BotsPage;
