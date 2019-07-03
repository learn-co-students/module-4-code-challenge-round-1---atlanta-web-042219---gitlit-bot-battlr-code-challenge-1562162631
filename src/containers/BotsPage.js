import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy botArmy= {this.props.botArmy} removeBot ={this.props.removeBot}/>
        <BotCollection botList={this.props.botList} addBot={this.props.addBot}/>
      </div>
    );
  }

}
export default BotsPage;

// export dfault BotsPage;