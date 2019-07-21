
const MyComponent = (props) => {
  var items = [];

  props.results.forEach((result) => {
    items[result.id] = <li key={result.id}>{result.text}</li>;
  });

  return (
    <ol>
      {items}
    </ol>
   );
}

const results=[
  {id:1,text:'apple'},
  {id:2,text:'orange'},
];

ReactDOM.render(
  <MyComponent results={results} />,
  document.getElementById('root')
);
