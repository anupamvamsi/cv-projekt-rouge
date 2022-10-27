import React, { Component } from 'react';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={this.props.className}>
        <h3>{this.props.sectionTitle}</h3>
      </section>
    );
  }
}
