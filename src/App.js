import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Section } from './components/Section';
import { WorkSection } from './components/WorkSection';
import { SectionTitle } from './components/SectionTitle';
import { EducationSection } from './components/EducationSection';
import { PersonalSection } from './components/PersonalSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numWorkSection: 1,
      workSections: [<WorkSection key={uniqid()} />],

      numEduSection: 1,
      eduSections: [<EducationSection key={uniqid()} />],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="title-container">
          <h1 className="title">CV Application</h1>
        </div>

        <div className="editor-container">
          <SectionTitle className="section-title">
            Personal Details
          </SectionTitle>
          <Section className="info-general" sectionTitle="Personal Details">
            <PersonalSection className="info-personal" />
          </Section>

          <SectionTitle className="section-title">Work Experience</SectionTitle>
          <Section className="info-work">{this.state.workSections}</Section>

          <SectionTitle className="section-title">Education</SectionTitle>
          <Section className="info-education" sectionTitle="Education">
            {this.state.eduSections}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
