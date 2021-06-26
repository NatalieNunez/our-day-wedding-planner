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
      <>
      <div className="budget-div">
        <div className="budget-row">
          <label className="budget-label">Total Budget</label>
          <span className="budget-total">{`$ ${this.state.budgetTotal}`}
            <i className="fas fa-pen edit-budg-icon" onClick={this.toggleForm}></i>
          </span>
        </div>
      </div>
      <div id={editOpen ? 'modal-open' : 'budget-modal'}>
          <div id="budget-modal-box">
            <form id="budget-item-form" onSubmit={this.handleSubmit}>
              <div className="modal-btns">
                <button className="budget-btn close" type="button" onClick={this.toggleForm}>Close</button>
                <button className="budget-btn save" type="submit">Save</button>
              </div>
              <div className="row">
                <div className="divider"></div>
                <label className="add-budget-label">Total Budget</label>
                <div className="inputs total-budget">
                  <input
                  required
                  autoFocus
                  id="item"
                  type="number"
                  name="budget-item"
                  placeholder={`$${this.state.budgetTotal}`}
                  defaultValue={`$${this.state.budgetTotal}`}
                  onChange={this.handleChange}/>
                </div>
              </div>
            </form>
          </div>
        </div>
        </>
    );
  }
}

export default EditBudget;
