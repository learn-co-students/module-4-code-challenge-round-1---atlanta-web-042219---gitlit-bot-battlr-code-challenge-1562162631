import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <div onClick={e => this.props.addBot(bot)}>
              <BotCard bot={bot} key={bot.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
