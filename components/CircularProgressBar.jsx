import React, { Component } from 'react'
import './CircularProgress.css';

class CircularProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      // Size of the enclosing square
      const sqSize = this.props.sqSize;
      // SVG centers the stroke width on the radius, subtract out so circle fits in square
      const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
      // Enclose cicle in a circumscribing square
      const viewBox = `0 0 ${sqSize} ${sqSize}`;
      // Arc length at 100% coverage is the circle circumference
      const dashArray = radius * Math.PI * 2;
      // Scale 100% coverage overlay with the actual percent
      const dashOffset = dashArray - dashArray * this.props.percentage  / 100;
  
      return (
        <svg
            width={this.props.sqSize}
            height={this.props.sqSize}
            viewBox={viewBox}>
              <circle
                className="circle-progress"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius }
              strokeWidth={`${this.props.strokeWidth}px`}
                // Start progress marker at 12 O'Clock
              transform={`rotate(-0 ${this.props.sqSize / 2} ${this.props.sqSize / 2} )`}
              style={{
                fill: '#f1f1f1',
                // background: 'linear-gradient(180deg, rgba(248, 154, 15, 0.8) 0%, #F89A0F 100%)',
                stroke: '#ffffff',
                // opacity: '0.5',
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset
              }} />
            <circle
              // style={{strokeOpacity: 0}}
              className="circle-background"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius }
              strokeWidth={`${this.props.strokeWidth }px`} />
            
            <text
            style={{
                fontSize: '1.1em',
                fontWeight: 'bold',
                fill: 'black' 
              }}
              className="circle-text"
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle">
              {`${this.props.percentage}%`}
            </text>
        </svg>
      );
    }
  }

export default CircularProgressBar;
  