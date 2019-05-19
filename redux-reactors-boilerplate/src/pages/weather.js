
import React from 'react';
import {getForecastReactor} from '../reactors/forecastReactor';
import {connect} from 'react-redux';
import {ForecastCard} from '../components/forecastCard';

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

    return (
      <div>
        {periods.map(period => <ForecastCard period={period}/>)}
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

