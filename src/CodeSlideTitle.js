const React = require('react');

const styles = {
  position: 'fixed',
  left: '50%',
  top: '20px',
  transform: 'translate(-50%)',
  padding: '20px 40px',
  border: '10px solid hotpink',
  fontSize: '2.5em',
  color: 'white',
  // textTransform: 'uppercase',
  whiteSpace: 'nowrap'
};

class CodeSlideTitle extends React.Component {
  render() {
    console.log("PANTS", this.props);
    let style = styles;
    if (this.props.style) {
      style = Object.assign({}, styles, this.props.style);
    }
    return (
      <h1 style={style}>{this.props.children}</h1>
    );
  }
}

module.exports = CodeSlideTitle;
