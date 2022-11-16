import React, { useState } from 'react';
import { BtnSubmit } from './BtnSubmit';
import { BtnEdit } from './BtnEdit';
import { Input } from './Input';
import { Section } from './Section';

export function PersonalSection(props) {
  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.classList.contains('input-name')) {
      setName(e.target.value);
    } else if (e.target.classList.contains('input-email')) {
      setEmail(e.target.value);
    } else if (e.target.classList.contains('input-phone')) {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  const handleEdit = (e) => {
    setSubmitted(false);
  };

  if (!submitted) {
    return (
      <Section className="details-personal">
        <Input
          className="input-txt input-name"
          labelDesc="Name"
          type="text"
          value={name}
          handleChange={handleChange}
        />
        <Input
          className="input-txt input-email"
          labelDesc="Email"
          type="email"
          value={email}
          handleChange={handleChange}
        />
        <Input
          className="input-txt input-phone"
          labelDesc="Phone"
          type="tel"
          value={phone}
          handleChange={handleChange}
        />

        <div className="btn-container">
          <BtnSubmit handleSubmit={handleSubmit} />
        </div>
      </Section>
    );
  } else {
    return (
      <Section className="details-personal">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>

        <div className="btn-container">
          <BtnEdit handleEdit={handleEdit} />
        </div>
      </Section>
    );
  }
}
