
import React from 'react';
import {getForecastReactor} from '../reactors/forecastReactor';
import {connect} from 'react-redux';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getForecast();
  }

  render() {
    const {periods} = this.props;
    if (!periods) {
      return null;
    }

    const {name, temperature, temperatureUnit, windSpeed, windDirection, icon} = periods[0];
    return (
      <div>
        <li>name: {name}</li>
        <li>temperature: {temperature}</li>
        <li>temperatureUnit: {temperatureUnit}</li>
        <li>windSpeed: {windSpeed}</li>
        <li>windDirection: {windDirection}</li>
        <img src={icon}></img>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    periods: state.periods,
  };
};

const mapDispatchToProps = {
  getForecast: getForecastReactor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

