import "./App.scss";

function Button({ text, icon }) {
  return (
    <button className={`ButtonComponent ${!icon ? "WithoutIcon" : ""}`}>
      {icon && <span className={`material-icons-outlined`}>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
