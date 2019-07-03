import React from 'react'

class DisplayOptions extends React.Component {
	render() {
		return (
			<div id="display-options">
				<input onChange={ e => this.props.handleOptionChange('search', e.target.value) } placeholder=" Search by name" />
				<br/><br/>
				<strong>Filter by class:</strong><br/>
				<select value={this.props.filter} onChange={ e => this.props.handleOptionChange('filter', e.target.value) }>
					<option value='Show All'>Show All</option>
					<option value='Defender'>Defender</option>
					<option value='Assault'>Assault</option>
					<option value='Support' >Support</option>
				</select>
				<br/><br/>
				<strong>Sort by:</strong><br/>
				<select onChange={ e => this.props.handleOptionChange('sort', e.target.value) } value={this.props.sort}>
					<option value='health'>Health</option>
					<option value='damage'>Damage</option>
					<option value='armor' >Armor</option>
				</select>
			</div>
		)
	}
}

export default DisplayOptions