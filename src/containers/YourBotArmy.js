import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.userBots.map(bot => (
              <div onClick={e => this.props.removeBot(bot)}>
                <BotCard bot={bot} key={bot.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
