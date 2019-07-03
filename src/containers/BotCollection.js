import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.props.botList.map( bot => <BotCard bot= {bot} updateBot={this.props.addBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;