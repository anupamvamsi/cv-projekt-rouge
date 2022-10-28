import React, { Component } from 'react';

export class SectionTitle extends Component {
  render() {
    return <h3 className="section-title">{this.props.children}</h3>;
  }
}
