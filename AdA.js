// import React from 'react';
// import ReactDOM, {StyleSheet} from 'react-dom';

class AdA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgImg: '' };
  }

  componentDidMount() {
    const bgUrl = 'http://127.0.0.1:9099/test/vultr.png';
    fetch(bgUrl).then(() => {
      // use cache mechanism.
      this.setState({ bgImg: bgUrl });
    }).then(() => {
      this.uncoverBg();
    }).catch();
  }

  uncoverBg() {
    const items = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < items.length; i++) {
      setTimeout(() => {
        let cell = document.querySelector('.' + items[i]);
        cell.innerHTML = null;
        cell.style.backgroundImage = null;
      }, 500 * (i + 1));
    }
  }

  render() {
    const styles = {
      outerContainer: {
        width: '300px',
        height: '250px',
      },
      container: {
        width: '300px',
        height: '250px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        backgroundImage: `url(${this.state.bgImg})`,
      },
      cell: {
        lineHeight: '125px',
        fontSize: '50px',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(130deg, #6C52D9 0%, #1EAAFC 85%, #3EDFD7 100%)',
      }
    };

    return (
      <div style={styles.outerContainer}>
        <a href='https://www.vultr.com/?ref=7347512'>
          <div style={styles.container}>
            <div style={styles.cell} className='a'>富强</div>
            <div style={styles.cell} className='b'>民主</div>
            <div style={styles.cell} className='d'>科技</div>
            <div style={styles.cell} className='c'>和谐</div>
          </div>
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  <AdA />,
  document.getElementById('root')
);
