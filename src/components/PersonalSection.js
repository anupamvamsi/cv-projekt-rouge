import React, { Component } from 'react';
import { BtnSubmit } from './BtnSubmit';
import { BtnEdit } from './BtnEdit';
import { Input } from './Input';
import { Section } from './Section';
import '../styles/sections.css';

export class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      name: '',
      email: '',
      phone: '',
      submitted: false,
    };
  }

  handleChange(e) {
    if (e.target.classList.contains('input-name')) {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.classList.contains('input-email')) {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.classList.contains('input-phone')) {
      this.setState({
        phone: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    // console.log(
    //   `name: ${this.state.name} email: ${this.state.email} phone: ${this.state.phone}`
    // );
    // console.log(`submitted: ${this.state.submitted}`);

    this.setState(
      {
        submitted: true,
      },
      () => {
        // console.log(`submitted: ${this.state.submitted}`);
      }
    );
  }

  handleEdit(e) {
    // console.log(
    //   `name: ${this.state.name} email: ${this.state.email} phone: ${this.state.phone}`
    // );
    // console.log(`submitted: ${this.state.submitted}`);

    this.setState({
      submitted: false,
    });
  }

  render() {
    if (!this.state.submitted) {
      return (
        <Section className="details-personal">
          <Input
            className="input-txt input-name"
            labelDesc="Name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <Input
            className="input-txt input-email"
            labelDesc="Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <Input
            className="input-txt input-phone"
            labelDesc="Phone"
            type="tel"
            value={this.state.phone}
            handleChange={this.handleChange}
          />

          <div className="btn-container">
            <BtnSubmit handleSubmit={this.handleSubmit} />
          </div>
        </Section>
      );
    } else {
      return (
        <Section className="details-personal">
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <p>{this.state.phone}</p>

          <div className="btn-container">
            <BtnEdit handleEdit={this.handleEdit} />
          </div>
        </Section>
      );
    }
  }
}
