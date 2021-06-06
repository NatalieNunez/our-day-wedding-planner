import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      modalOpen: false,
      item: '',
      estimate: ''
    };
  }

  toggleModal() {
    const modalOpen = this.state.modalOpen;
    this.setState({
      modalOpen: !modalOpen
    });
  }

  handleChange(event) {
    const target = event.target;
    if (target.name === 'budget-item') {
      this.setState({
        item: target.value
      });
    } else {
      this.setState({
        estimate: target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      estimate: this.state.estimate
    };
    this.props.onSubmit(newItem);
    this.setState({
      item: '',
      estimate: ''
    });
  }

  render() {
    const modalOpen = this.state.modalOpen;
    return (
      <>
      <div className="budget-footer">
        <h4 className="add-budget-text" onClick={this.toggleModal}>Add an item</h4>
        <button className="add-budget-btn" onClick={this.toggleModal}>
          <i className="fas fa-plus add-budget-icon"></i>
        </button>
      </div>
      <div id={modalOpen ? 'modal-open' : 'budget-modal'}>
          <div id="budget-modal-box">
            <form id="budget-item-form" onSubmit={this.handleSubmit}>
              <div className="modal-btns">
                <button className="budget-btn close" type="button" onClick={this.toggleModal}>Close</button>
                <button className="budget-btn save" type="submit">Save</button>
              </div>
              <div className="row">
                <div className="divider"></div>
                <label className="add-budget-label">Add Item</label>
                <div className="inputs">
                  <input
                  required
                  autoFocus
                  id="item"
                  type="text"
                  name="budget-item"
                  placeholder="Budget Item"
                  defaultValue={this.state.item}
                  onChange={this.handleChange}/>

                  <input
                  required
                  autoFocus
                  id="estimate"
                  placeholder="Estimate"
                  type="text"
                  name="estimate"
                  defaultValue={this.state.estimate}
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

export default BudgetForm;
