import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Tasklist = () => {

   let{data:tasks,pending,error} =useFetch("http://localhost:5000/tasks");
    let handleDelete=(id)=>{
        fetch("http://localhost:5000/tasks/" +id,{method:"DELETE"})
    }
    return( 
        <div className="task-list">
            <h1>List of All Task</h1>
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading.........</h1>}
            {tasks &&
            <table border="2px">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Task Name</th>
                        <th>Task detail</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((e,i)=>(
                        <tr>
                            <td>{i+1}</td> 
                            <td>{e.userName}</td>
                            <td>{e.taskName}</td>
                            <td>{e.taskDetail}</td>
                            <td>{e.startDate}</td>
                            <td>{e.endDate}</td>
                            <td>{e.status}</td>
                         {(e.status==="Completed") && <td><button onClick={()=>handleDelete(e.id)}>Delete</button></td>}
                         {(e.status!=="Completed") && <td><Link to={`/Edit ${e.id}`}><button>Edit</button></Link></td>}
                        </tr>
                    ))}
                </tbody>
                </table>}
        </div>
     ); 
}
 
export default Tasklist;