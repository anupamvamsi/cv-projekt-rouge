import React, { Component } from 'react';

export class BtnDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button className="btn-delete" type="button" onClick={this.props.del}>
        Delete
      </button>
    );
  }
}
