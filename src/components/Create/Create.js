import React from 'react';
import { Link } from 'react-router-dom';
import { useContext,useState } from "react";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
    const [users, setUsers] = useContext(UserContext);  

    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [position,setPosition] = useState("")
    const [salary,setSalary] = useState("")

    const updateId =(e)=>{
        setId(e.target.value)

    };
    const updateName =(e)=>{
        setName(e.target.value)
    };
    const updatePosition =(e)=>{
        setPosition(e.target.value)
    };
    const updateSalary =(e)=>{
        setSalary(e.target.value)
        console.log(updateSalary)
    };

    const addUser =(e)=>{
        e.preventDefault();
        setUsers([...users,{id:id,name:name,position:position,salary:salary}])
    }
    return (
    
       <form onSubmit={addUser} className="mt-5">
           <div className="form-group">
               <label >ID</label>
               <input className="form-control" type="text" placeholder="Enter Id" onChange={updateId} value={id} name="id"/>
           </div>

           <div className="form-group">
               <label >Name</label>
               <input className="form-control" type="text" placeholder="Enter Name" onChange={updateName} value={name} name="name" />
           </div>

           <div className="form-group">
               <label >Position</label>
               <input className="form-control" type="text" placeholder="Enter Position" onChange={updatePosition} value={position} name="position"/>
           </div>

           <div className="form-group">
               <label >Salary</label>
               <input className="form-control" type="text" placeholder="Enter Salary" onChange={updateSalary} value={salary} name="salary"/>
           </div>
           <button className="btn btn-primary mr-3">Create User</button>
           <Link to="/">
               <button className="btn btn-info">Back Home</button>
           </Link>

       </form>
    
    );
};

export default Create;