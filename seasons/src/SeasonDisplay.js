import React from "react";
import './SeasonDisplay.css';

class SeasonDisplay extends React.Component {
  seasonConfig = {
    summer: {
      text: "Let's hit the beach",
      iconName: "sun",
    },
    winter: {
      text: "Burr it is cold!",
      iconName: "snowflake",
    },
  };

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }

  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = this.seasonConfig[season];

    return (
      <div className={`season-display ${season}`}> 
        <i className={`massive ${iconName} icon icon-left`} />
        <h1>{text}</h1>
        <i className={`massive ${iconName} icon icon-right`} />
      </div>
    );
  }
}

export default SeasonDisplay;
