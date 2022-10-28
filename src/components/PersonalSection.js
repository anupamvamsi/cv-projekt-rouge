import React, { Component } from 'react';
import { BtnSubmit } from './BtnSubmit';
import { Input } from './Input';
import { Section } from './Section';

export class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Section className="details-personal">
        <Input className="input-txt" labelDesc="Name" type="text" />
        <Input className="input-txt" labelDesc="Email" type="email" />
        <Input className="input-txt" labelDesc="Phone" type="tel" />

        <BtnSubmit />
      </Section>
    );
  }
}
