import React, { Component } from 'react';
export default class Checkbox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				我的组件库-Checkbox
                <label for="test"><input id="test" name="test" type="checkbox" value="" />123</label>
			</div>
		);
	}
}
