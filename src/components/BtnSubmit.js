import React, { Component } from 'react';

export class BtnSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button
        className="btn-submit"
        type="submit"
        onClick={this.props.handleSubmit}
      >
        Submit
      </button>
    );
  }
}
