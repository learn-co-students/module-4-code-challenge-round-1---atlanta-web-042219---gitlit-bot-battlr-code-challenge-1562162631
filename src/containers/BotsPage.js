import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {

	state = {
		allBots: [],
		userBots: []
	}

	componentDidMount(){
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(resp => resp.json())
		.then(allBots => this.setState({ allBots }))
	}

	enlistBot = (bot)=> !this.state.userBots.find(userBot => userBot.id === bot.id) ? this.setState({ userBots: [...this.state.userBots, bot] }) : null
			
	delistBot = (bot)=> {
		let newArray = this.state.userBots
		let index = newArray.indexOf(bot)
		newArray.splice(index, 1)
		this.setState({ userBots: newArray })
	}

  render() {
  	console.log(this.state)
    return (
      <div>
	      <YourBotArmy userBots={this.state.userBots} delistBot={this.delistBot} />
	      <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
