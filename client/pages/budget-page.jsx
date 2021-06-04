import React from 'react';
import Header from '../components/header';

export default class BudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 0
    };
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
