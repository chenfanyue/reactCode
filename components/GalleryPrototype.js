// import React from 'react';
// import ReactDOM from 'react-dom';

function ButtonLeft(props) {
  return (
    <button onClick={props.onClickLeft}>
      Previous
    </button>
  );
}

function ButtonRight(props) {
  return (
    <button onClick={props.onClickRight}>
      Next
    </button>
  );
}

class Ab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
  }

  handleClickLeft() {
    let i = this.state.i;
    i--;
    this.setState({
      i: (i + 6) % 6
    });
  }

  handleClickRight() {
    let i = this.state.i;
    i++;
    this.setState({
      i: (i + 6) % 6
    });
  }

  render() {
    const arr = [
      'xhDSaN.jpg', 'e2NwWL.jpg', 'KdiCtu.jpg',
      'L9Q4Ji.jpg', 'ORtDSn.jpg', 'p39u0I.jpg'
    ];
    const imgStyle = {
      maxHeight: '550px',
      width: 'auto'
    };
    return (
      <div>
        <div>
          <ButtonLeft onClickLeft={() => this.handleClickLeft()} />
          <ButtonRight onClickRight={() => this.handleClickRight()} />
        </div>
        <div>
          <img src={'https://st.chenfanyue.cn/i/' + arr[this.state.i]}
            style={imgStyle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Ab />,
  document.getElementById('AbContainer')
);
