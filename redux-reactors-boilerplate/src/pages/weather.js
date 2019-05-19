
import React from 'react';
import {getForecastReactor} from '../reactors/forecastReactor';
import {connect} from 'react-redux';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This is Weather Page</h2>
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

