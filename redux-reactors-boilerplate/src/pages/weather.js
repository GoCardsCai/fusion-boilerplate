
import React from 'react';
import {getForecastReactor} from '../reactors/forecastReactor';
import {connect} from 'react-redux';
import {compose} from 'redux';
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
    this.state = {
      location:'37.5914,-122.3893'
    }
  }

  componentDidMount() {
    this.props.getForecast(this.state);
  }

  startSearch = () => {
    const {location} = this.state;
    this.props.getForecast({location});
  }

  render() {
    const {periods, loading} = this.props;
    const {location} = this.state;

    if (!periods) {
      return null;
    }

    return (
      <div>
        <div>
          Please input the new location:
          <input
            defaultValue={location}
            onChange={(e) => {
              this.setState({location:e.target.value})}
            }
          />
          <button onClick={this.startSearch}>Search</button>
        </div>
        {loading && <h3>loading</h3>}
        <Container>
          {periods.map((period, idx) => <ForecastCard period={period} key={idx}/>)}
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = {
};

const HOC = compose(
  getForecastReactor,
  connect(mapStateToProps, mapDispatchToProps)
);

export default HOC(Weather);

