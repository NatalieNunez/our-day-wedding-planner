import React from 'react';

class EditBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetTotal: '',
      editOpen: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getBudget();
  }

  getBudget() {
    fetch('/api/budget')
      .then(res => res.json())
      .then(budget => {
        this.setState({
          budgetTotal: budget[0].budgetTotal
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const update = {
      budgetTotal: this.state.budgetTotal
    };
    this.props.onSubmit(update);
    this.toggleForm();
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      budgetTotal: target.value
    });
  }

  toggleForm() {
    const editOpen = this.state.editOpen;
    this.setState({
      editOpen: !editOpen
    });
  }

  render() {
    const editOpen = this.state.editOpen;
    return (
      <div className="budget-div">
        <label className="budget-label">Total Budget</label>
        {
          editOpen
            ? <form className="budget-form" onSubmit={this.handleSubmit}>
                <input className="budget-input" type="text" placeholder={`$ ${this.state.budgetTotal}`} onChange={this.handleChange} required/>
                <button type="submit" className="save-budget">Save</button>
                <button type="button" className="cancel-budget" onClick={this.toggleForm}>Cancel</button>
              </form>
            : <span className="budget-total">{`$ ${this.state.budgetTotal}`}
                <i className="fas fa-pen edit-budg-icon" onClick={this.toggleForm}></i>
              </span>
        }
      </div>
    );
  }
}

export default EditBudget;
