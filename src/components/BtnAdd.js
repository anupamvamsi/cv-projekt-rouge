import React, { Component } from 'react';

export class BtnAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button className="btn-add" type="button" onClick={this.props.add}>
        +
      </button>
    );
  }
}
