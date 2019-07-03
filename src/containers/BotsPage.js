import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: []
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data =>{
      let botsArray = data.map(bots => {return {...bots, mine: false}})
      this.setState({allBots: botsArray})
    })
  }

  handleMyBots = (botHash) => {
    console.log(botHash)
    let botsArray = this.state.allBots.map(bot =>{
      if(bot.id === botHash.id){
        bot.mine = true
        return bot
      }else if(bot.mine){
        botHash.mine = false
        return bot
      }else return bot
    })
    this.setState({allBots: botsArray})
  }


filterMyBots(){
  return this.state.allBots.filter(bot => bot.mine)
}


  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} handleMyBots={this.handleMyBots}/>
        <YourBotArmy handleMyBots={this.handleMyBots}
        myBots={this.filterMyBots()}/>
      </div>
    );
  }

}

export default BotsPage;
