function Glossary({items}) {
  return (
    <dl>
      {items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

const arr=[
  {id:0, term:'ip', description:'internet protocoal'},
  {id:1, term:'tcp', description:'transfer control protocoal'},
  {id:2, term:'ue', description:'user experience'},
  {id:3, term:'cto', description:'chief technology officer'},
];

ReactDOM.render(
  <Glossary items={arr} />,
  document.getElementById('root')
);