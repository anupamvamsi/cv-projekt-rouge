import './App.css';
import React, { Component } from 'react';
import { Section } from './components/Section';
import { WorkSection } from './components/WorkSection';
import { SectionTitle } from './components/SectionTitle';
import { EducationSection } from './components/EducationSection';
import { PersonalSection } from './components/PersonalSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
          <Section className="info-work">
            <WorkSection className="info-experience" />
          </Section>

          <SectionTitle className="section-title">Education</SectionTitle>
          <Section className="info-education" sectionTitle="Education">
            <EducationSection />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
