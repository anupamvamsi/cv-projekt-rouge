import React, { Component } from 'react';
import { BtnSubmit } from './BtnSubmit';
import { Input } from './Input';
import { Section } from './Section';
import '../styles/sections.css';

export class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleChange(e) {
    if (e.target.classList.contains('input-name')) {
      this.setState(
        {
          name: e.target.value,
        },
        () => console.log(this.state.name)
      );
    } else if (e.target.classList.contains('input-email')) {
      this.setState(
        {
          email: e.target.value,
        },
        () => console.log(this.state.email)
      );
    } else if (e.target.classList.contains('input-phone')) {
      this.setState(
        {
          phone: e.target.value,
        },
        () => console.log(this.state.phone)
      );
    }
  }

  handleSubmit(e) {
    // e.preventDefault();
    console.log(e.target);
  }

  render() {
    return (
      <Section className="details-personal">
        <Input
          className="input-txt input-name"
          labelDesc="Name"
          type="text"
          handleChange={this.handleChange}
        />
        <Input
          className="input-txt input-email"
          labelDesc="Email"
          type="email"
          handleChange={this.handleChange}
        />
        <Input
          className="input-txt input-phone"
          labelDesc="Phone"
          type="tel"
          handleChange={this.handleChange}
        />

        <div className="btn-container">
          <BtnSubmit handleSubmit={this.handleSubmit} />
        </div>
      </Section>
    );
  }
}
