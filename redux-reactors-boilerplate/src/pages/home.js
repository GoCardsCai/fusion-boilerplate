import React from 'react';
import Weather from './weather';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Weather/>)
  }
}