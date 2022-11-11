export function BtnSubmit(props) {
  return (
    <button className="btn-submit" type="submit" onClick={props.handleSubmit}>
      Submit
    </button>
  );
}
