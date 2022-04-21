import { Upload } from "@progress/kendo-react-upload";
function DocTableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {documentNo, documentName, doucumentFile}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={documentNo} onChange={(evnt)=>(handleChange(index, evnt))} name="documentNo" className="form-control"/>
                </td>
                <td><input type="text" value={documentName}  onChange={(evnt)=>(handleChange(index, evnt))} name="documentName" className="form-control"/> </td>
                <td><input type="file" value={doucumentFile}  onChange={(evnt)=>(handleChange(index, evnt))} name="doucumentFile" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default DocTableRows;