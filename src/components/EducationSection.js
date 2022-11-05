import React, { Component } from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { DateRange } from './DateRange';
import { BtnDelete } from './BtnDelete';
import { BtnSubmit } from './BtnSubmit';
import { BtnAdd } from './BtnAdd';
import { BtnEdit } from './BtnEdit';

export class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      school: '',
      areaStudy: '',
      dateStart: '',
      dateEnd: '',
      currentlyWorking: false,

      submitted: false,
    };
  }

  handleChange(e) {
    if (e.target.classList.contains('input-school')) {
      this.setState({
        school: e.target.value,
      });
    } else if (e.target.classList.contains('input-study')) {
      this.setState({
        areaStudy: e.target.value,
      });
    } else if (e.target.classList.contains('input-date-start')) {
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
          return {
            dateEnd: e.target.value,
          };
        }
      });
    } else if (e.target.classList.contains('input-checkbox')) {
      this.setState({
        currentlyWorking: e.target.checked,
      });
    }
  }

  handleSubmit(e) {
    this.setState({
      submitted: true,
    });
  }

  handleEdit(e) {
    this.setState({
      submitted: false,
    });
  }

  render() {
    if (!this.state.submitted) {
      return (
        <Section className="details-education">
          <Input
            className="input-txt input-school"
            labelDesc="School"
            inputType="text"
            value={this.state.school}
            handleChange={this.handleChange}
          />
          <Input
            className="input-txt input-study"
            labelDesc="Area of study"
            inputType="text"
            value={this.state.areaStudy}
            handleChange={this.handleChange}
          />
          <DateRange
            dateStart={this.state.dateStart}
            dateEnd={this.state.dateEnd}
            currentlyWorking={this.state.currentlyWorking}
            handleChange={this.handleChange}
          />

          <div className="btn-container">
            <BtnSubmit handleSubmit={this.handleSubmit} />
            <BtnDelete del={this.props.del} />
            <BtnAdd add={this.props.add} />
          </div>
        </Section>
      );
    } else {
      return (
        <Section className="details-education">
          <p>{this.state.school}</p>
          <p>{this.state.areaStudy}</p>
          <p>
            {(() => {
              if (!this.state.currentlyWorking) {
                return `${this.state.dateStart} to ${this.state.dateEnd}`;
              } else {
                return `${this.state.dateStart} to present`;
              }
            })()}
          </p>

          <div className="btn-container">
            <BtnEdit handleEdit={this.handleEdit} />
            <BtnAdd />
          </div>
        </Section>
      );
    }
  }
}
