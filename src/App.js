import './App.css';
import './styles/sections.css';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Section } from './components/Section';
import { WorkSection } from './components/WorkSection';
import { SectionTitle } from './components/SectionTitle';
import { EducationSection } from './components/EducationSection';
import { PersonalSection } from './components/PersonalSection';
import { BtnAdd } from './components/BtnAdd';

export default function App(props) {
  const firstIDWork = uniqid();
  const firstIDEdu = uniqid();
  const [numWorkSections, setNumWorkSections] = useState(1);
  const [workSections, setWorkSections] = useState([
    <WorkSection
      key={firstIDWork}
      add={() => addSection('work')}
      del={(e) => delSection(e, firstIDWork, 'work')}
    />,
  ]);

  const [numEduSections, setNumEduSections] = useState(1);
  const [eduSections, setEduSections] = useState([
    <EducationSection
      key={firstIDEdu}
      add={() => addSection('edu')}
      del={(e) => delSection(e, firstIDEdu, 'edu')}
    />,
  ]);

  const addSection = (sectionType) => {
    if (sectionType === 'work') {
      const idWork = uniqid();
      setNumWorkSections(numWorkSections + 1);

      setWorkSections(
        workSections.concat(
          <WorkSection
            key={idWork}
            add={() => addSection('work')}
            del={(e) => {
              delSection(e, idWork, 'work');
            }}
          />
        )
      );
    }

    if (sectionType === 'edu') {
      const idEdu = uniqid();
      setNumEduSections(numEduSections + 1);
      setEduSections(
        eduSections.concat(
          <EducationSection
            key={idEdu}
            add={() => addSection('edu')}
            del={(e) => {
              delSection(e, idEdu, 'edu');
            }}
          />
        )
      );
    }
  };

  const delSection = (e, uniqueID, sectionType) => {
    if (sectionType === 'work') {
      setWorkSections(workSections.filter((s) => s.key !== uniqueID));
      setNumWorkSections(numWorkSections - 1);
    }

    if (sectionType === 'edu') {
      setEduSections(eduSections.filter((s) => s.key !== uniqueID));
      setNumEduSections(numEduSections - 1);
    }
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">CV Application</h1>
      </div>

      <div className="editor-container">
        <SectionTitle className="section-title">Personal Details</SectionTitle>
        <Section className="info-general" sectionTitle="Personal Details">
          <PersonalSection className="info-personal" />
        </Section>

        <SectionTitle className="section-title">Work Experience</SectionTitle>
        <Section className="info-work">
          {workSections}
          {(() => {
            if (workSections.length === 0) {
              return (
                <BtnAdd className="btn-add" add={() => addSection('work')} />
              );
            }
          })()}
        </Section>

        <SectionTitle className="section-title">Education</SectionTitle>
        <Section className="info-education" sectionTitle="Education">
          {eduSections}

          {(() => {
            if (eduSections.length === 0) {
              return (
                <BtnAdd className="btn-add" add={() => addSection('edu')} />
              );
            }
          })()}
        </Section>
      </div>
    </div>
  );
}
