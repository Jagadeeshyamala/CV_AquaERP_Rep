import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { connect } from "react-redux";

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
    this.setState({
      selected: e.selected,
    });
  };

  render() {
    return (
      <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
        <TabStripTab title="Basic">
          <div>
            <p>
             Basic details
            </p>
          </div>
        </TabStripTab>
        <TabStripTab title="Personal">
          <div>
          Personal details
          </div>
        </TabStripTab>
        <TabStripTab title="Experience">
          <div>
           Experience details
          </div>
        </TabStripTab>
        <TabStripTab title="Document" disabled={false}>
        <div>
           document details
          </div>
        </TabStripTab>
      </TabStrip>
    );
  }
}

export default connect(mapStateToProps, { })(EmployeeMaster)