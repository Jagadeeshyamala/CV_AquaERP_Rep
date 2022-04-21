
function ReferenceTableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {name, mobileNo, reletionType}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="Name" className="form-control"/>
                </td>
                <td><input type="text" value={mobileNo}  onChange={(evnt)=>(handleChange(index, evnt))} name="Mobile Number" className="form-control"/> </td>
                <td><input type="text" value={reletionType}  onChange={(evnt)=>(handleChange(index, evnt))} name="Reletion Type" className="form-control"/> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default ReferenceTableRows;