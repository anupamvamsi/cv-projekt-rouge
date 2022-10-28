import React, { Component } from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { DateRange } from './DateRange';
import { BtnDelete } from './BtnDelete';
import { BtnSubmit } from './BtnSubmit';
import { BtnAdd } from './BtnAdd';

export class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Section className="details-education">
        <Input className="input-txt" labelDesc="School" inputType="text" />
        <Input
          className="input-txt"
          labelDesc="Area of study"
          inputType="text"
        />
        <DateRange />

        <div className="btn-container">
          <BtnSubmit />
          <BtnDelete />
          <BtnAdd />
        </div>
      </Section>
    );
  }
}
