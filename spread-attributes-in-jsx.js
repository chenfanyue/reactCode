function Greeting(props){
  return <h1>hi {props.firstName}</h1>;
}

function App2(props) {
  return <Greeting {...props} />;
}

ReactDOM.render(
  <App2 firstName='Ben' lastName='Hector'/>,
  document.getElementById('root')
);
