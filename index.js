const Button = (props) => {
  return <button className={props.box}>{props.name}</button>;
};

const element = (
  <div className="message">
    <h1 className="heading">Social Buttons</h1>
    <div className="container">
      <Button name="Like" box="button1" />
      <Button name="Comment" box="button2" />
      <Button name="Share" box="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
