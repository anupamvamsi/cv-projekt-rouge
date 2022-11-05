import './App.css';
import './styles/sections.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Section } from './components/Section';
import { WorkSection } from './components/WorkSection';
import { SectionTitle } from './components/SectionTitle';
import { EducationSection } from './components/EducationSection';
import { PersonalSection } from './components/PersonalSection';
import { BtnAdd } from './components/BtnAdd';

class App extends Component {
  constructor(props) {
    super(props);

    this.addSection = this.addSection.bind(this);
    this.delSection = this.delSection.bind(this);

    const firstIDWork = uniqid();
    const firstIDEdu = uniqid();
    this.state = {
      numWorkSection: 1,
      workSections: [
        <WorkSection
          key={firstIDWork}
          add={() => this.addSection('work')}
          del={(e) => this.delSection(e, firstIDWork, 'work')}
        />,
      ],

      numEduSection: 1,
      eduSections: [
        <EducationSection
          key={firstIDEdu}
          add={() => this.addSection('edu')}
          del={(e) => this.delSection(e, firstIDEdu, 'edu')}
        />,
      ],
    };
  }

  addSection(sectionType) {
    if (sectionType === 'work') {
      const idWork = uniqid();
      this.setState(
        {
          numWorkSection: this.state.numWorkSection + 1,
          workSections: this.state.workSections.concat(
            <WorkSection
              key={idWork}
              add={() => this.addSection('work')}
              del={(e) => {
                this.delSection(e, idWork, 'work');
              }}
            />
          ),
        },
        () => {
          console.log(this.state.numWorkSection, this.state.workSections);
        }
      );
    }

    if (sectionType === 'edu') {
      const idEdu = uniqid();
      this.setState(
        {
          numEduSection: this.state.numEduSection + 1,
          eduSections: this.state.eduSections.concat(
            <EducationSection
              key={idEdu}
              add={() => this.addSection('edu')}
              del={(e) => {
                this.delSection(e, idEdu, 'edu');
              }}
            />
          ),
        },
        () => {
          console.log(this.state.numEduSection, this.state.eduSections);
        }
      );
    }
  }

  delSection(e, uniqueID, sectionType) {
    console.log('uID: ', uniqueID);

    if (sectionType === 'work') {
      this.setState(
        {
          workSections: this.state.workSections.filter(
            (s) => s.key !== uniqueID
          ),
          numWorkSection: this.state.numWorkSection - 1,
        },
        () => console.log(this.state.workSections)
      );
    }

    if (sectionType === 'edu') {
      this.setState(
        {
          eduSections: this.state.eduSections.filter((s) => s.key !== uniqueID),
          numEduSection: this.state.numEduSection - 1,
        },
        () => console.log(this.state.eduSections)
      );
    }
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
            {this.state.workSections}
            {(() => {
              if (this.state.workSections.length === 0) {
                return (
                  <BtnAdd
                    className="btn-add"
                    add={() => this.addSection('work')}
                  />
                );
              }
            })()}
          </Section>

          <SectionTitle className="section-title">Education</SectionTitle>
          <Section className="info-education" sectionTitle="Education">
            {this.state.eduSections}

            {(() => {
              if (this.state.eduSections.length === 0) {
                return (
                  <BtnAdd
                    className="btn-add"
                    add={() => this.addSection('edu')}
                  />
                );
              }
            })()}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
