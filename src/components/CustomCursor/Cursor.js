import React from 'react';
import './Cursor.css'


class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <div className="custom-cursor" style={{ left: `${x}px`, top: `${y}px` }} />
    );
  }
}


export default Cursor;