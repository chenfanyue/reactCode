class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.rp=this.rp.bind(this);
    this.cd=React.createRef();
  }

  rp(){
    setTimeout(()=>{
      this.cd.current.innerHTML=this.props.replace;
    },2000);
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
