import React, { Component } from 'react';
import { Input } from './Input';

export class DateRange extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="date-range">
        <div class="input-dates">
          <Input
            className="input-date-start"
            labelDesc="From"
            inputType="date"
          />
          {/* "OR" it with a "present" checkbox by using workingStatus */}
          <Input className="input-date-end" labelDesc="To" inputType="date" />
        </div>

        <Input
          className="input-chkbox"
          labelDesc="Currently here"
          inputType="checkbox"
        />
      </div>
    );
  }
}
