export function Input(props) {
  return (
    <label className="input-label">
      {props.labelDesc}
      <input
        className={props.className}
        type={props.inputType}
        value={props.value}
        checked={props.checked}
        onChange={props.handleChange}
      />
    </label>
  );
}
