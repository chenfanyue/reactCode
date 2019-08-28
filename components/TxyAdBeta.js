// import React from 'react';
// import ReactDOM from 'react-dom';

class TxyAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontImg: '//st.chenfanyue.cn/ad/txyun_2c4g3y_280x165.webp',
      backImg: '//st.chenfanyue.cn/ad/txyun_2c4g_280x165.webp',
    };
    this.cardRef = React.createRef();
  }

  componentDidMount() {
    const card = this.cardRef.current;
    const frontToBack = `translateX(-100%) rotateY(-180deg)`;
    const backToFront = `translateX(0) rotateY(0)`;
    setTimeout(() => {
      card.style.transform = frontToBack;
      setInterval(() => {
        card.style.transform = frontToBack;
      }, 6000);
    }, 2000);
    setTimeout(() => {
      card.style.transform = backToFront;
      setInterval(() => {
        card.style.transform = backToFront;
      }, 6000);
    }, 5000);
  }

  render() {
    const styles = {
      container: {
        width: '280px',
        height: '165px',
        position: 'relative',
        perspective: 1000,
        border: 'lightblue 1px solid',
      },
      card: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        transformStyle: 'preserve-3d',
        transition: 'transform 1s',
        transformOrigin: 'right center',
      },
      bothSide: {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
      },
      front: {
        background: `url(${this.state.frontImg})`,
      },
      back: {
        background: `url(${this.state.backImg})`,
        transform: 'rotateY(180deg)',
      },
    };

    return (
      <section style={styles.container}>
        <div ref={this.cardRef} style={styles.card}>
          <div style={{ ...styles.bothSide, ...styles.front }}>
          </div>
          <div style={{ ...styles.bothSide, ...styles.back }}>
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <TxyAd />,
  document.getElementById('TxyAdContainer')
);
