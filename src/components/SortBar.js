import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
class SortBar extends React.Component {

  render() {
    return (
      <div>
        Sort By :
        <NativeSelect onChange={event => this.props.onSort(event.target.value)}>
          <option value={"Date"}>Date</option>
          <option value={"Popularity"}>Popularity</option>
        </NativeSelect>
      </div>
    );
  }
}

export default SortBar;
