import './App.css';
import React, { Component } from 'react';
import { Section } from './components/Section';

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
          {/* name */}
          {/* email */}
          {/* phone num */}
        </Section>

        <Section className="info-experience" sectionTitle="Work Experience">
          {/* company name */}
          {/* position / title */}
          {/* job tasks */}
          {/* date (range) of work */}
          {/* add button for extra... */}
        </Section>

        <Section className="info-education" sectionTitle="Education">
          {/* school name */}
          {/* title of study */}
          {/* date (range) of study */}
        </Section>
      </div>
    );
  }
}

export default App;
