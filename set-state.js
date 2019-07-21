class DivColoredBoxesWithText extends React.Component {
  constructor(props){
    super(props);
    this.state={bgColor:'red'};
  }

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
        <div style={{ backgroundColor: "blue", height: 60, flex: 0.3 }} onClick={()=>{this.setState({bgColor:this.state.bgColor==='pink'?'red':'pink'});}} />
        <div style={{ backgroundColor: this.state.bgColor, height: 60, flex: 0.5 }} ref='lower' />
        <div>Hello World!</div>
      </div>
    );
  }
}

ReactDOM.render(
  <DivColoredBoxesWithText />,
  document.getElementById('root')
);
