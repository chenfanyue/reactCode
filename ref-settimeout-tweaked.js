class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.cd=React.createRef();
  }

  rp(){
    setTimeout(()=>{
      console.log(this);
      this.cd.current.innerHTML=this.props.replace;
    },1000);
  }

  componentDidMount(){
    this.rp();
  }

  render(){
    return (
      <div ref={this.cd}>
      <p>qcloud</p>
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent replace='<h2>girl</h2>' />,
  document.getElementById('root')
);
