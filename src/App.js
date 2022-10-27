import './App.css';
import React, { Component } from 'react';
import { Section } from './components/Section';
import { WorkSection } from './components/WorkSection';
import { SectionTitle } from './components/SectionTitle';
import { EducationSection } from './components/EducationSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>

        <Section className="info-general" sectionTitle="Personal Details">
          <SectionTitle className="section-title">
            Personal Details
          </SectionTitle>
        </Section>

        <Section className="info-work">
          <SectionTitle className="section-title">Work Experience</SectionTitle>
          <WorkSection className="info-experience"></WorkSection>
        </Section>

        <Section className="info-education" sectionTitle="Education">
          <SectionTitle className="section-title">Education</SectionTitle>
          <EducationSection>
            {/* school name */}
            {/* title of study */}
            {/* date (range) of study */}
          </EducationSection>
        </Section>
      </div>
    );
  }
}

export default App;
