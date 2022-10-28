import React, { Component } from 'react';
import { BtnAdd } from './BtnAdd';
import { BtnDelete } from './BtnDelete';
import { BtnSubmit } from './BtnSubmit';
import { DateRange } from './DateRange';
import { Input } from './Input';
import { Section } from './Section';

export class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workingStatus: false,
    };
  }

  render() {
    return (
      <Section className="details-work">
        <Input className="input-txt" labelDesc="Company" inputType="text" />
        <Input className="input-txt" labelDesc="Position" inputType="text" />
        {/* <Input labelDesc="TASKS? NEEDS TEXTAREA" inputType="text"/> */}

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
