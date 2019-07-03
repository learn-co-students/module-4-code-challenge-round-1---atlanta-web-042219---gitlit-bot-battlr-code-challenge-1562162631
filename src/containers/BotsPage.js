import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super();
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bot => this.setState({
      bots: bot
    }))
  }

  componentDidMount(){
    this.fetchBots()
  }

  addBot = (bot) => {
    // let filter = this.state.botArmy.filter(bots =>{
    //   if(bots.id == bot.id)
    //   return bots
    //   else return null})
    //   this.this.setState({
    //     botArmy: [...this.state.botArmy, bot]
    // })

    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  render() {
    return (
      <div>
        {<YourBotArmy botArmy={this.state.botArmy}/>}
        {<BotCollection bots={this.state.bots} addBot={this.addBot}/>}
        
      </div>
    );
  }

}

export default BotsPage;
