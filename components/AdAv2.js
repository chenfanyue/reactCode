// import React from 'react';
// import ReactDOM from 'react-dom';

class AdA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImg: '',
      aHref: ''
    };
  }

  componentDidMount() {
    const ads = [
      {
        poster: 'https://st.chenfanyue.cn/ad/vultr_banner_300x250.png',
        ahref: 'https://www.vultr.com/?ref=7347512'
      },
      {
        poster: 'https://st.chenfanyue.cn/ad/aliyun_banner_300x250.jpg',
        ahref: 'https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=g8lhjthm'
      },
    ];
    const adNo = this.getRandomInt(0, ads.length - 1);
    const ad = ads[adNo];
    fetch(ad.poster).then(() => {
      // use cache mechanism.
      this.setState({
        bgImg: ad.poster,
        aHref: ad.ahref
      });
    }).then(() => {
      this.uncoverBg();
    }).catch();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  uncoverBg() {
    const items = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < items.length; i++) {
      setTimeout(() => {
        let cell = document.querySelector('.' + items[i]);
        cell.innerHTML = null;
        cell.style.backgroundImage = null;
      }, 1000 * (i + 1));
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
      cellOnLeft: {
        lineHeight: '125px',
        fontSize: '50px',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1)',
      },
      cellOnRight: {
        lineHeight: '125px',
        fontSize: '50px',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(0.25turn, #ebf8e1, #f69d3c)',
      },
    };

    return (
      <div style={styles.outerContainer}>
        <a href={this.state.aHref}>
          <div style={styles.container}>
            <div style={styles.cellOnLeft} className='a'>富强</div>
            <div style={styles.cellOnRight} className='b'>民主</div>
            <div style={styles.cellOnLeft} className='d'>科技</div>
            <div style={styles.cellOnRight} className='c'>和谐</div>
          </div>
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  <AdA />,
  document.getElementById('AdAContainer')
);
