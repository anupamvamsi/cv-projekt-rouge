import React, { Component } from 'react';

export class SectionTitle extends Component {
  render() {
    return <h3>{this.props.children}</h3>;
  }
}
