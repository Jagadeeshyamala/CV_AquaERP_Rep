import { useState } from "react/cjs/react.development";
import FamilyTableRows from "./family-TableRows";
import './employee.css';

function AddFamilyInfo(){

    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            name:'',           
            reletionType:'',
            ocupation:'',
            address:''

        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
 
}
    return(
        <div className="container">
            <div className="row">
               

                <table className="table">
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Reletion Type</th>
                          <th>Ocupation</th>
                          <th>Address</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+Add</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <FamilyTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>

       
              
            </div>
        </div>
    )

}
export default AddFamilyInfo