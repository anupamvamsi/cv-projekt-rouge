import React, { Component } from 'react';

export class BtnEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button
        className="btn-edit"
        type="button"
        onClick={this.props.handleEdit}
      >
        Edit
      </button>
    );
  }
}
