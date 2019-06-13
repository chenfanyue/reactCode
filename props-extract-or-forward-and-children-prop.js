const Button = props => {
  const { kind, ...other } = props;
  console.log(other);
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
