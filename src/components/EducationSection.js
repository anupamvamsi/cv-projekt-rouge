import React, { useState } from 'react';
import { Section } from './Section';
import { Input } from './Input';
import { DateRange } from './DateRange';
import { BtnDelete } from './BtnDelete';
import { BtnSubmit } from './BtnSubmit';
import { BtnAdd } from './BtnAdd';
import { BtnEdit } from './BtnEdit';

export function EducationSection(props) {
  const [school, setSchool] = useState('');
  const [areaStudy, setAreaStudy] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.classList.contains('input-school')) {
      setSchool(e.target.value);
    } else if (e.target.classList.contains('input-study')) {
      setAreaStudy(e.target.value);
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
      <Section className="details-education">
        <Input
          className="input-txt input-school"
          labelDesc="School"
          inputType="text"
          value={school}
          handleChange={handleChange}
        />
        <Input
          className="input-txt input-study"
          labelDesc="Area of study"
          inputType="text"
          value={areaStudy}
          handleChange={handleChange}
        />
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
      <Section className="details-education">
        <p>{school}</p>
        <p>{areaStudy}</p>
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
