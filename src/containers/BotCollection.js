import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => 
			  <BotCard bot={bot}
			  handleMyBots={this.props.handleMyBots}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
