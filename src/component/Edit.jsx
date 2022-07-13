import { useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const Edit = () => {

    const { id } = useParams();
    let { data: task, pending } = useFetch(`http://localhost:5000/tasks${id}`)
    let history = useHistory();
    // let uName = useRef("");
    // let uTaskName = useRef("");
    // let uTaskDetail = useRef("");
    // let uStartDate = useRef("");
    // let uEndDate = useRef("");
    let [userName,setuser]=useState("")
    let [taskname,settaskname]=useState("")
    let [taskdetail,settaskdetail]=useState("")
    let [startdate,setstart]=useState("")
    let [enddate,setend]=useState("")
    //   const handleEdit=(e)=>{
    //     e.preventDefault();

    //     let currentDate = new Date();
    //     let startDate = new Date(uStartDate.current.value);
    //     let endDate = new Date(uEndDate.current.value); 
    //     let status = "";

    //     if(currentDate < startDate)
    //     {
    //         status = "Pending";
    //     }
    //     else if(currentDate>=startDate && currentDate<=endDate)
    //     {
    //         status = "Ongoing"
    //     }
    //     else
    //     {
    //         status = "Completed";
    //     }

    //     const newTask = 
    //     { 
    //         userName : uName.current.value,
    //         taskName : uTaskName.current.value,
    //         taskDetail : uTaskDetail.current.value,
    //         startDate : uStartDate.current.value,
    //         endDate : uEndDate.current.value,
    //         status
    //     }
    //     // console.log(newTask);
 let newTask={userName}
        fetch("http://localhost:5000/tasks/"+id , 
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }
        ).then(()=>{})
                // history.push(`/tasklist`)})
    //   }

    return (
        <div className="edit">

            <h1>Edit a Task</h1>

            {task && <div>
                <form>

                    <label>User Name</label> <input type="text" defaultValue={task.userName}onChange={((e)=>{setuser(e.target.value)})} />

                    <label>Task Name</label> <input type="text" defaultValue="" />

                    <label>Task Detail</label> <textarea  defaultValue="" />

                    <label>Start Date</label> <input type="date" defaultValue="" />

                    <label>End Date</label> <input type="date" defaultValue="" />

                    < input id="add" type="submit" value="Edit Task" />

                </form>
                <Link to="/tasklist"><button>Click to view</button></Link>
            </div>}
           
        </div>);
}
export default Edit;