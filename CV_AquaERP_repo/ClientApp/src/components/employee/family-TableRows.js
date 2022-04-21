
function FamilyTableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {name, reletionType,ocupation,address}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="Name" className="form-control"/>
                </td>
                <td><input type="text" value={reletionType}  onChange={(evnt)=>(handleChange(index, evnt))} name="Reletion Type" className="form-control"/> </td>
                <td><input type="text" value={ocupation}  onChange={(evnt)=>(handleChange(index, evnt))} name="Ocupation" className="form-control"/> </td>
                <td><input type="text" value={address}  onChange={(evnt)=>(handleChange(index, evnt))} name="Address" className="form-control"/> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default FamilyTableRows;