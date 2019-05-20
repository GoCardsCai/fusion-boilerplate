
import React from 'react';
import {getForecastReactor} from '../reactors/forecastReactor';
import {connect} from 'react-redux';
import {ForecastCard} from '../components/forecastCard';
import {styled} from 'fusion-plugin-styletron-react';

const Container = styled('div',
  {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
);

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
      <Container>
        {periods.map((period, idx) => <ForecastCard period={period} key={idx}/>)}
      </Container>
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

