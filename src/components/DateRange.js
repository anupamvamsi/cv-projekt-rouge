import React, { Component } from 'react';
import { Input } from './Input';

export class DateRange extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="date-range">
        <div className="input-dates">
          <Input
            className="input-date-start"
            labelDesc="From"
            inputType="date"
            value={this.props.dateStart}
            handleChange={this.props.handleChange}
          />
          {/* "OR" it with a "present" checkbox by using workingStatus */}
          {(() => {
            if (!this.props.currentlyWorking) {
              return (
                <Input
                  className="input-date-end"
                  labelDesc="To"
                  inputType="date"
                  value={this.props.dateEnd}
                  handleChange={this.props.handleChange}
                />
              );
            }
          })()}
        </div>

        <Input
          className="input-checkbox"
          labelDesc="Currently here"
          inputType="checkbox"
          checked={this.props.currentlyWorking}
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}
