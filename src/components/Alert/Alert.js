import "./Alert.css";

function Alert(props) {
  return (
    <div className="Alert">
      {props.children}
    </div>
  );
}
export default Alert;