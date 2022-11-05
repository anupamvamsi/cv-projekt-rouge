import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      checked: false,
    };
  }

  render() {
    return (
      <label className="input-label">
        {this.props.labelDesc}
        <input
          className={this.props.className}
          type={this.props.inputType}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.props.handleChange}
        />
      </label>
    );
  }
}
