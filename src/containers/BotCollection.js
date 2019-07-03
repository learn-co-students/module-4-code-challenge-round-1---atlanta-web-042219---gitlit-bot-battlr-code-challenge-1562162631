import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs.js'
import DisplayOptions from '../components/DisplayOptions.js'

class BotCollection extends React.Component {

  state = { 
    filter: 'Show All',
    search: false,
    sort: 'health',
    showBot: false
  }

  handleBotClick = (bot)=> this.setState({ showBot: bot })
  closeBotSpecs = ()=> this.setState({ showBot: false })

  handleOptionChange = (option, value)=> this.setState({ [option]: value })

  getDisplayBots = ()=> {
    let displayBots = this.props.allBots

    if(this.state.filter !== 'Show All')
      displayBots = displayBots.filter(bot => bot.bot_class === this.state.filter)
    if(this.state.search)
      displayBots = displayBots.filter(bot => bot.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    if(this.state.sort)
      displayBots = displayBots.sort( (a,b) => this.compare(a,b, this.state.sort))

    return displayBots
  }

  compare = (a,b, attr)=>{
    if(a[attr] < b[attr]) return  1
    if(a[attr] > b[attr]) return -1
    else return 0
  }

  renderAllBots = ()=> (
    <div className="ui four column grid">
      <div className="row">
        {this.getDisplayBots().map(bot => <BotCard key={'all-'+bot.id} bot={bot} handleBotClick={this.handleBotClick} />)}
      </div>
    </div>
  ) 

  render(){
    console.log(this.state)
  	return (
      <div>
        <h1>Enlist some bots!</h1>
        <DisplayOptions filter={this.state.filter} sort={this.state.sort} handleOptionChange={this.handleOptionChange} />
        { 
          this.state.showBot ? 
            <BotSpecs bot={this.state.showBot} enlistBot={this.props.enlistBot} closeBotSpecs={this.closeBotSpecs} /> 
            : 
            this.renderAllBots()
        }
      </div>
  	);
  }

};

export default BotCollection;
