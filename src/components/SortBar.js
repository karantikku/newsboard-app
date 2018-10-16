import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
class SortBar extends React.Component {
  onSort(event) {
    if (event.target.value) {
      console.log(props);
    }
  }

  render() {
    return (
      <div>
        Sort By :
        <NativeSelect onChange={this.onSort}>
          <option value={"Date"}>Date</option>
          <option value={"Popularity"}>Popularity</option>
        </NativeSelect>
      </div>
    );
  }
}

export default SortBar;
