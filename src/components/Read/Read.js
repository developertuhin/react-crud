import React from "react";
import "./Read.css";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Read = () => {
  const [users, setUsers] = useContext(UserContext);

  //catch object by id using useparams
  const { id } = useParams();
    
  const user = users.filter((user) => user.id == id);

  return (
    <div>
      {user.map((user) => (
        <div className="row mt-5">
          <div className="read-style container justify-content-center col-md-4   m-auto">
            <h3><span>Name</span>: {user.name}</h3>
            <h4><span>Position</span>: {user.position}</h4>
            <h4><span>Salary</span>: {user.salary}</h4>
            <Link to="/">
              <button className="btn btn-outline-info">Back to Home</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Read;
