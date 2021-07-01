import React from 'react';
import Header from '../components/header';
import EditBudget from '../budget/edit-budget';
import BudgetForm from '../budget/budget-form';
import ViewBudgetItems from '../budget/view-budget-items';

export default class BudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: [],
      items: []
    };
    this.updateBudget = this.updateBudget.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.addBudgetItem = this.addBudgetItem.bind(this);
    this.editBudget = this.editBudget.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    fetch('/api/budget-items')
      .then(res => res.json())
      .then(items => {
        this.setState({
          items
        });
      })
      .catch(err => console.error(err));
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
        const newBudgetArray = this.state.budgets.slice();
        newBudgetArray.push(update);
        this.setState({
          budgets: newBudgetArray
        });
      })
      .catch(err => console.error(err));
  }

  addBudgetItem(newItem) {
    fetch('/api/budget-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(newItem => {
        const newArray = this.state.items.slice();
        newArray.push(newItem);
        this.getAllItems();
      })
      .catch(err => console.error(err));
  }

  editBudget(event) {
    // console.log(event.target.tagName);
    // if (event.target.tagName !== 'DIV') {
    //   return;
    // } else {
    //   fetch('/api/budget-items'), {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newItem)
    //   })
    //     .then(res => res.json())
    //     .then(newItem => {
    //       const newArray = this.state.items.slice();
    //       newArray.push(newItem);
    //       this.getAllItems();
    //     })
    //     .catch(err => console.error(err));

    // }
  }

  render() {
    return (
      <>
        <Header />
        <EditBudget onSubmit={this.updateBudget} />
        <ViewBudgetItems items={this.state.items} editBudget={this.editBudget}/>
        <BudgetForm onSubmit={this.addBudgetItem}/>
      </>
    );
  }
}
