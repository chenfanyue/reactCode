const ListItemWrapper = (props) => <li>{props.data.text}</li>;

const MyComponent = (props) => {
  return (
    <ul>
      {props.results.map((result) => 
        <ListItemWrapper key={result.id} data={result}/>
      )}
    </ul>
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
