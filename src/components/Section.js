import React, { Component } from 'react';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={this.props.className}>{this.props.children}</section>
    );
  }
}
