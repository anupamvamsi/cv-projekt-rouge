export function BtnDelete(props) {
  return (
    <button className="btn-delete" type="button" onClick={props.del}>
      Delete
    </button>
  );
}
