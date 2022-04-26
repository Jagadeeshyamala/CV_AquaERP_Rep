import { Form, Field, FormElement } from "@progress/kendo-react-form";
function FamilyTableRows({rowsData, deleteTableRows, handleChange}) {

    return(
        
        rowsData.map((data, index)=>{
            const {name,relationShip,age,ocupation,address,isLive,type,nominee}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="Name" className="form-control"/>
                </td>
                <td><input type="text" value={relationShip}  onChange={(evnt)=>(handleChange(index, evnt))} name="Reletion Type" className="form-control"/> </td>
                <td><input type="text" value={age}  onChange={(evnt)=>(handleChange(index, evnt))} name="Age" className="form-control"/> </td>
                <td><input type="text" value={ocupation}  onChange={(evnt)=>(handleChange(index, evnt))} name="Occupation" className="form-control"/> </td>
                <td><input type="text" value={address}  onChange={(evnt)=>(handleChange(index, evnt))} name="Address" className="form-control"/> </td>

                <td>  <div className="mb-3 is-inhous">
                              <input type="checkbox" name={"isLive"}  onChange={(evnt)=>(handleChange(index, evnt))}label={"isLive"} />
                            </div>  </td>
                <td><input type="text" value={type}  onChange={(evnt)=>(handleChange(index, evnt))} name="Type" className="form-control"/> </td>
                <td><input type="text" value={nominee}  onChange={(evnt)=>(handleChange(index, evnt))} name="Nominee" className="form-control"/> </td>
               

                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default FamilyTableRows;