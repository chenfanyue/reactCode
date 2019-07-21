class DivColoredBoxesWithText extends React.Component {
  render() {
    return (
      <div style={{
          display: 'flex',
          flexDirection: "column",
          height: 100,
          padding: 20,
          backgroundColor: 'cyan'
        }}
      >
        <div style={{ backgroundColor: "blue", height: 60, flex: 0.3 }} />
        <div style={{ backgroundColor: "red", height: 60, flex: 0.5 }} />
        <div>Hello World!</div>
      </div>
    );
  }
}

ReactDOM.render(
  <DivColoredBoxesWithText />,
  document.getElementById('root')
);
