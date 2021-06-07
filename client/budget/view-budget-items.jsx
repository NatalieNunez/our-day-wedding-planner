import React from 'react';

function BudgetItem(props) {
  const item = props.item.item;
  const estimate = props.item.estimate;
  return (
    <>
      <div className="budget-item-div">
        <span>{item}</span>
        <span className="estimate">{`$ ${estimate}`}</span>
      </div>
    </>
  );
}

function ViewBudgetItems(props) {
  return (
    <div id="budget-container">
      {
        props.items.map(item => {
          return <BudgetItem key={item.itemId} item={item} />;
        })
      }
    </div>
  );
}

export default ViewBudgetItems;
