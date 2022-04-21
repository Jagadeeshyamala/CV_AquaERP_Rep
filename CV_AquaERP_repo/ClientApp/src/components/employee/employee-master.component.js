import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'
import './employee.css';

const mapStateToProps = (state) => {
    return {
        departmets: state.departmets
    };
};

class EmployeeMaster extends React.Component {
  
  state = {
    selected: 1,
  };
  handleSelect = (e) => {
    debugger;
    const history = useHistory();
    history.push(`/addBasicInfo`);
    this.setState({
      selected: e.selected,
    });
  };

  handleCreate = () => {
    this.setState({  selected: 1,});
};

  render() {
    return (
       <div></div>
    );
  }
}

export default connect(mapStateToProps, { })(EmployeeMaster)