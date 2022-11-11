import { Input } from './Input';

export function DateRange(props) {
  return (
    <div className="date-range">
      <div className="input-dates">
        <Input
          className="input-date-start"
          labelDesc="From"
          inputType="date"
          value={props.dateStart}
          handleChange={props.handleChange}
        />
        {/* "OR" it with a "present" checkbox by using workingStatus */}
        {(() => {
          if (!props.currentlyWorking) {
            return (
              <Input
                className="input-date-end"
                labelDesc="To"
                inputType="date"
                value={props.dateEnd}
                handleChange={props.handleChange}
              />
            );
          }
        })()}
      </div>

      <Input
        className="input-checkbox"
        labelDesc="Currently here"
        inputType="checkbox"
        checked={props.currentlyWorking}
        handleChange={props.handleChange}
      />
    </div>
  );
}
