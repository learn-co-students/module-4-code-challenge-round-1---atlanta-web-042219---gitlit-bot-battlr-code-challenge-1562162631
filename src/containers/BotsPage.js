import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one

  state = { bots: [], userBots: [] };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(bots => this.setState({ bots: bots }));
  }

  addBot = bot => {
    let newUserBots = this.state.userBots;
    const findBot = newUserBots.find(findBot => findBot.id === bot.id);

    if (!findBot) {
      newUserBots.push(bot);
      this.setState({ userBots: newUserBots });
    }
  };

  removeBot = bot => {
    let delUserBots = this.state.userBots;
    let index = delUserBots.indexOf(bot);
    delUserBots.splice(index, 1);

    this.setState({ userBots: delUserBots });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          userBots={this.state.userBots}
          removeBot={this.removeBot}
        />
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }
}

export default BotsPage;
