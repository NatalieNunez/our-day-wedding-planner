import React from 'react';
import Header from '../components/header';
import EditBudget from '../budget/edit-budget';

export default class BudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: []
    };
    this.updateBudget = this.updateBudget.bind(this);
  }

  updateBudget(update) {
    fetch('/api/budget', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(update => {
        const newBudgetArray = this.state.budget.slice();
        newBudgetArray.push(update);
        this.setState({
          budget: newBudgetArray
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header />
        <EditBudget onSubmit={this.updateBudget} />
      </>
    );
  }
}
