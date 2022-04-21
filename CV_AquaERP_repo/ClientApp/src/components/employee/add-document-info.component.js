import { useState } from "react/cjs/react.development";
import DocTableRows from "./document-TableRows";
import './employee.css';

function AddDocumentInfo(){

    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            documentNo:'',
            documentName:'',
            doucumentFile:''  
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
                          <th>Document No</th>
                          <th>Document Name</th>
                          <th>Choose File</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+Add</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <DocTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>

       
              
            </div>
        </div>
    )

}
export default AddDocumentInfo