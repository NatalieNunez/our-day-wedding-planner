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
      <div className="guest-footer">
        <h4 className="add-guest-text" onClick={this.toggleModal}>Add an item</h4>
        <button className="add-guest-btn" onClick={this.toggleModal}>
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>
      <div id={modalOpen ? 'modal-open' : 'guest-modal'}>
          <div id="guest-modal-box">
            <form id="guest-form" onSubmit={this.handleSubmit}>
              <div className="modal-btns">
                <button className="guest-btn close" type="button" onClick={this.toggleModal}>Close</button>
                <button className="guest-btn save" type="submit">Save</button>
              </div>
              <div className="row">
                <div className="divider"></div>
                <label className="add-guest-label">Add Item</label>
                <div className="inputs">
                  <input
                  required
                  autoFocus
                  id="first-name"
                  type="text"
                  name="budget-item"
                  defaultValue={this.state.item}
                  onChange={this.handleChange}/>

                  <input
                  required
                  autoFocus
                  id="last-name"
                  placeholder="$estimate"
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
