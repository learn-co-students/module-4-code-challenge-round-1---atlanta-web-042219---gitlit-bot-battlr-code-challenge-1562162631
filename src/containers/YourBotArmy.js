import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <h1>Your Robot Army</h1>
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.userBots.map(bot => <BotCard key={'user-'+bot.id} bot={bot} delistBot={this.props.delistBot} />)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
