import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      value: '',
      checked: false,
    };
  }

  onChange(e) {
    if (e.target.type === 'text' || e.target.type === 'date') {
      this.setState(
        {
          value: e.target.value,
        },
        () => console.log(`value: ${this.state.value} `)
      );
    }

    if (e.target.type === 'checkbox') {
      this.setState(
        {
          checked: e.target.checked,
        },
        () => console.log(`check: ${this.state.checked}`)
      );
    }
  }

  render() {
    return (
      <label className="input-label">
        {this.props.labelDesc}
        <input
          className={this.props.className}
          type={this.props.inputType}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
