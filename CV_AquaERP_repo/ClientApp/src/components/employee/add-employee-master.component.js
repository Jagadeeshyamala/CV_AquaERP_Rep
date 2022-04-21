import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { connect } from "react-redux";
import AddBasicInfo from './add-basic-info.component';
import AddPersonalInfo from './add-personal-info.component';
import AddDocumentInfo from './add-document-info.component';
import AddReferenceInfo from './add-reference-info.component';
import AddFamilyInfo from './add-family-info.component';
import AddExperienceInfo from './add-experience-info.component';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import './employee.css';

const mapStateToProps = (state) => {
    return {
        departmets: state.departmets
    };
};


class AddEmployeeMaster extends React.Component {
  state = {
    selected: 0,
  };
    handleSelect = (e) => {
        this.setState({
            selected: e.selected,
        })
        debugger;
        if (e.selected === 0) {
            // this.props.history.push(`/addBasicInfo`);
        }
        else if (e.selected === 1) {
         
        }
        else if (e.selected === 2) {

        }
        else if (e.selected === 3) {

        }
    };

    componentDidMount() {
        // this.props.history.push(`/addBasicInfo`);
    }

  render() {
    return (
      <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
        <TabStripTab title="Basic" >
          <div>
          <AddBasicInfo></AddBasicInfo>
          </div>
        </TabStripTab>
        <TabStripTab title="Personal">
          <div>
          <AddPersonalInfo></AddPersonalInfo>
          </div>
        </TabStripTab>
        <TabStripTab title="Refrence">
          <div>
          <AddReferenceInfo></AddReferenceInfo>
          </div>
        </TabStripTab>
        <TabStripTab title="Family">
          <div>
          <AddFamilyInfo></AddFamilyInfo>
          </div>
        </TabStripTab>
        <TabStripTab title="Experience">
          <div>
          <AddExperienceInfo></AddExperienceInfo>
          </div>
        </TabStripTab>
        <TabStripTab title="Document" disabled={false}>
        <div>
        <AddDocumentInfo></AddDocumentInfo>
          </div>
        </TabStripTab>
      </TabStrip>
    );
  }
}

export default connect(mapStateToProps, { })(AddEmployeeMaster)