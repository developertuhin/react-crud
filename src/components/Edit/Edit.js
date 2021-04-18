import React from 'react';
import { useContext } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Edit = () => {
    const [users, setUsers] = useContext(UserContext);  
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);
// state making
    const [name, setName] = useState(user[0].name)
    const [position, setPosition] = useState(user[0].position)
    const [salary, setSalary] = useState(user[0].salary)
  //edit
    const editName = (e) => {
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
 
      };
      const editPosition = (e) => {
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
      };
      const editSalary = (e) => {
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
      };
      //edit user button function
    const editUser = (e) => {
        e.preventDefault();
        setUsers([...users]);
      };
   
    return (
        <form className="mt-5">
          <h1>
            ID : {user[0].id}
          </h1>
           <div className="form-group">
            <label >Name</label>
            <input className="form-control" type="text" placeholder={user[0].name} onChange={editName} value={name} name="name" />
        </div>

        <div className="form-group">
            <label >Position</label>
            <input className="form-control" type="text" placeholder={user[0].position} onChange={editPosition} value={position} name="position"/>
        </div>

        <div className="form-group">
            <label >Salary</label>
            <input className="form-control" type="text" placeholder= {user[0].salary}  onChange={editSalary} value={salary} name="salary"/>
        </div>

        <Link to="/">
        <button onSubmit={()=> editUser} type="submit" className="btn btn-primary mr-3">Edit User</button>
        
            <button className="btn btn-info">Back Home</button>
        </Link>

    </form>
    );
};

export default Edit;