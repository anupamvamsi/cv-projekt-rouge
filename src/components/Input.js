import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <label className="input-label">
        {this.props.labelDesc}
        <input className={this.props.className} type={this.props.inputType} />
      </label>
    );
  }
}
