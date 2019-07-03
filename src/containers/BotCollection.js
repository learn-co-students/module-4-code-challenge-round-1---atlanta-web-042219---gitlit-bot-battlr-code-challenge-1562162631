import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
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
