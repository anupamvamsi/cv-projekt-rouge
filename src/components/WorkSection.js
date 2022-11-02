import React, { Component } from 'react';
import { BtnAdd } from './BtnAdd';
import { BtnDelete } from './BtnDelete';
import { BtnEdit } from './BtnEdit';
import { BtnSubmit } from './BtnSubmit';
import { DateRange } from './DateRange';
import { Input } from './Input';
import { Section } from './Section';

export class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      company: '',
      position: '',
      dateStart: '',
      dateEnd: '',
      currentlyWorking: false,

      submitted: false,

      workingStatus: false,
    };
  }

  handleChange(e) {
    if (e.target.classList.contains('input-company')) {
      console.log(e.target.value);
      this.setState({
        company: e.target.value,
      });
    } else if (e.target.classList.contains('input-position')) {
      console.log(e.target.value);
      this.setState({
        position: e.target.value,
      });
    } else if (e.target.classList.contains('input-date-start')) {
      console.log(e.target.value);
      this.setState({
        dateStart: e.target.value,
      });
    } else if (e.target.classList.contains('input-date-end')) {
      this.setState((state, props) => {
        if (
          this.state.dateStart !== '' &&
          this.state.currentlyWorking === false &&
          this.state.dateStart < e.target.value
        ) {
          console.log(e.target.value);
          return {
            dateEnd: e.target.value,
          };
        }
      });
    } else if (e.target.classList.contains('input-checkbox')) {
      console.log(e.target.checked);
      this.setState({
        currentlyWorking: e.target.checked,
      });
    }
  }

  handleSubmit(e) {
    // console.log(
    //   `name: ${this.state.name} email: ${this.state.email} phone: ${this.state.phone}`
    // );
    console.log(`handleSubmit          submitted: ${this.state.submitted}`);

    this.setState(
      {
        submitted: true,
      },
      () => {
        console.log(`handleSubmit setState submitted: ${this.state.submitted}`);
      }
    );
  }

  handleEdit(e) {
    // console.log(
    //   `name: ${this.state.name} email: ${this.state.email} phone: ${this.state.phone}`
    // );
    console.log(`handleEdit            submitted: ${this.state.submitted}`);

    this.setState(
      {
        submitted: false,
      },
      () => {
        console.log(`handleEdit   setState submitted: ${this.state.submitted}`);
      }
    );
  }

  render() {
    if (!this.state.submitted) {
      return (
        <Section className="details-work">
          <Input
            className="input-txt input-company"
            labelDesc="Company"
            inputType="text"
            value={this.state.company}
            handleChange={this.handleChange}
          />
          <Input
            className="input-txt input-position"
            labelDesc="Position"
            inputType="text"
            value={this.state.position}
            handleChange={this.handleChange}
          />
          {/* <Input labelDesc="TASKS? NEEDS TEXTAREA" inputType="text"/> */}

          <DateRange
            dateStart={this.state.dateStart}
            dateEnd={this.state.dateEnd}
            currentlyWorking={this.state.currentlyWorking}
            handleChange={this.handleChange}
          />

          <div className="btn-container">
            <BtnSubmit handleSubmit={this.handleSubmit} />
            <BtnDelete />
            <BtnAdd />
          </div>
        </Section>
      );
    } else {
      return (
        <Section className="details-work">
          <p>{this.state.company}</p>
          <p>{this.state.position}</p>
          <p>
            {(() => {
              if (!this.state.currentlyWorking) {
                return `${this.state.dateStart} - ${this.state.dateEnd}`;
              } else {
                return `${this.state.dateStart} - present`;
              }
            })()}
          </p>

          <div className="btn-container">
            <BtnEdit handleEdit={this.handleEdit} />
          </div>
        </Section>
      );
    }
  }
}
