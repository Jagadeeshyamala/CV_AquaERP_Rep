
function ExperienceTableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {companyName,fromDate,toDate,salary,designation,workExperience,reasonForLeaving}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={companyName} onChange={(evnt)=>(handleChange(index, evnt))} name="Company Name" className="form-control"/>
                </td>
                <td><input type="text" value={fromDate}  onChange={(evnt)=>(handleChange(index, evnt))} name="FromDate" className="form-control"/> </td>
                <td><input type="text" value={toDate}  onChange={(evnt)=>(handleChange(index, evnt))} name="ToDate" className="form-control"/> </td>
                <td><input type="text" value={salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="Salary" className="form-control"/> </td>

                <td><input type="text" value={designation}  onChange={(evnt)=>(handleChange(index, evnt))} name="Designation" className="form-control"/> </td>
                <td><input type="text" value={workExperience}  onChange={(evnt)=>(handleChange(index, evnt))} name="WorkExperience" className="form-control"/> </td>
                <td><input type="text" value={reasonForLeaving}  onChange={(evnt)=>(handleChange(index, evnt))} name="ReasonForLeaving" className="form-control"/> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default ExperienceTableRows;