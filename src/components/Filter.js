import React from "react";

const FilterTodo = (props) => {
  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={onFilterValueChanged}>
        <option value="all">Todas</option>
        <option value="finished">Finalizadas</option>
        <option value="pending">Pendentes</option>
      </select>
    </div>
  );
};

export default FilterTodo;
