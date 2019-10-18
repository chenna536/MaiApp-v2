import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props)
    this.state = { rating: props.rating }
  }
  render() {
    var stars = [];

    for (var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (this.state.rating > i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label
          className={klass}
          key={i}
        >
          ★
            {/* &#9733; */}
        </label>
      );
    }
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}

export default Rating;
