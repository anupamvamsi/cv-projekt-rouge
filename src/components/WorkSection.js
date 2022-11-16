import React, { useState } from 'react';
import { BtnAdd } from './BtnAdd';
import { BtnDelete } from './BtnDelete';
import { BtnEdit } from './BtnEdit';
import { BtnSubmit } from './BtnSubmit';
import { DateRange } from './DateRange';
import { Input } from './Input';
import { Section } from './Section';

export function WorkSection(props) {
  // state
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.classList.contains('input-company')) {
      setCompany(e.target.value);
    } else if (e.target.classList.contains('input-position')) {
      setPosition(e.target.value);
    } else if (e.target.classList.contains('input-date-start')) {
      setDateStart(e.target.value);
    } else if (e.target.classList.contains('input-date-end')) {
      if (
        dateStart !== '' &&
        currentlyWorking === false &&
        dateStart < e.target.value
      ) {
        setDateEnd(e.target.value);
      }
    } else if (e.target.classList.contains('input-checkbox')) {
      setCurrentlyWorking(e.target.checked);
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
      <Section className="details-work">
        <Input
          className="input-txt input-company"
          labelDesc="Company"
          inputType="text"
          value={company}
          handleChange={handleChange}
        />
        <Input
          className="input-txt input-position"
          labelDesc="Position"
          inputType="text"
          value={position}
          handleChange={handleChange}
        />
        {/* <Input labelDesc="TASKS? NEEDS TEXTAREA" inputType="text"/> */}

        <DateRange
          dateStart={dateStart}
          dateEnd={dateEnd}
          currentlyWorking={currentlyWorking}
          handleChange={handleChange}
        />

        <div className="btn-container">
          <BtnSubmit handleSubmit={handleSubmit} />
          <BtnDelete del={props.del} />
          <BtnAdd add={props.add} />
        </div>
      </Section>
    );
  } else {
    return (
      <Section className="details-work">
        <p>{company}</p>
        <p>{position}</p>
        <p>
          {(() => {
            if (!currentlyWorking) {
              return `${dateStart} to ${dateEnd}`;
            } else {
              return `${dateStart} to present`;
            }
          })()}
        </p>

        <div className="btn-container">
          <BtnEdit handleEdit={handleEdit} />
          <BtnAdd add={props.add} />
        </div>
      </Section>
    );
  }
}
